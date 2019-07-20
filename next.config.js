require('dotenv').config();
const webpack = require('webpack');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  distDir: '../dist',
  webpack(config) {
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();
      if (entries['main.js']) {
        entries['main.js'].unshift('../polyfills.js');
      }
      return entries;
    };

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.DEFAULT_LANGUAGE': JSON.stringify(process.env.DEFAULT_LANGUAGE),
        'process.env.CLIENT_ID': JSON.stringify(process.env.CLIENT_ID),
      }),
    );

    return config;
  },
});
