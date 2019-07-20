import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from './theme';

const withTheme = WrappedComponent => props => (
  <ThemeProvider theme={theme}>
    <>
      <MuiThemeProvider theme={theme}>
        <WrappedComponent {...props} />
      </MuiThemeProvider>
    </>
  </ThemeProvider>
);

export default withTheme;
