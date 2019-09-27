import React from "react";
import NextApp, { Container } from "next/app";

import CssBaseline from "@material-ui/core/CssBaseline";
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

export default withTheme(App);
