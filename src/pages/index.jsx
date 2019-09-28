import React from "react";

import { Box } from "@material-ui/core";

import withLayout from "../layouts/WithLayoutProvider";
import Typography from "../components/Typography";
import About from "../modules/about/About";
import Experience from "../modules/experience/Experience";
import Contact from "../modules/contact/Contact";
import Work from "../modules/work/Work";

const Index = () => {
  return (
    <Box mt={{ sm: 7 }} pl={{ sm: 12 }}>
      <Typography type="h1-primary">
        Work in progress <br />
      </Typography>
      <About />
      <Experience />
      <Work />
      <Contact />
    </Box>
  );
};

export default withLayout(Index);
