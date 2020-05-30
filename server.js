const express = require("express");
const path = require("path");
const next = require("next");
const cookieParser = require("cookie-parser");
const proxy = require("http-proxy-middleware");
const bodyParser = require("body-parser");
require("dotenv").config();


const port = parseInt(process.env.PORT, 10) || 4000;
const dev = process.env.NODE_ENV === "development";
const app = next({ dev, dir: "./src" });
const handle = app.getRequestHandler();

const removeTrailingSlashes = (req, res, expressNext) => {
  const isTrailingSlash = req.path.substr(-1) === "/" && req.path.length > 1;
  if (isTrailingSlash) {
    const query = req.url.slice(req.path.length);
    const normalizeUrl = req.path.slice(0, -1) + query;
    res.redirect(301, normalizeUrl);
  } else {
    expressNext();
  }
};


const serviceProxies = [
  {
    identifier: "/rest",
    target: process.env.BACKEND_SERVER
  }
];

app.prepare().then(() => {
  const server = express();

  server.disable("x-powered-by");
  server.use(removeTrailingSlashes);
  server.use(cookieParser());
  server.use("/assets", express.static(path.join(__dirname, "src", "assets")));

  serviceProxies.forEach(({ identifier, target }) => {
    server.use(
      identifier,
      proxy({
        target,
        changeOrigin: true,
      })
    );
  });

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
