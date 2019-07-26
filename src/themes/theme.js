import { createMuiTheme } from "@material-ui/core/styles";

import colors from "./colors";
import { typography } from "./typography";

const THEME_UNIT_SPACING = 4;

const theme = createMuiTheme({
  ...colors,
  breakpoints: {
    values: {
      xs: 0,
      sm: 481,
      md: 769
    }
  },
  typography: { ...typography },
  spacing: factor => `${THEME_UNIT_SPACING * factor}px`,
  shadows: ["none", "0px -2px 6px rgba(0, 0, 0, 0.05)"],
  background1: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  palette: {
    type: "light",
    primary: {
      main: colors.primary,
      light: colors.primary,
      dark: colors.primary
    },
    secondary: {
      main: colors.background,
      light: colors.background,
      dark: colors.background
    }
  }
});

export default theme;
