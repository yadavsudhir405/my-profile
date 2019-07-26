import React from "react";
import { compose } from "redux";
import NextApp, { Container } from "next/app";

import CssBaseline from "@material-ui/core/CssBaseline";

import withRedux from "../redux/withReduxProvider";
import withTheme from "../themes/withThemeProvider";

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <CssBaseline />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default compose(
  withRedux,
  withTheme
)(App);
