import colors from "./colors";
import breakpoints from "./breakpoints";

export const typography = {
  fontFamily:
    "Calibre, San Francisco, SF Pro Text,  Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif",
  fontWeightLight: 300,
  fontWeightRegular: 500,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  fontWeights: {
    light: 300,
    normal: 500,
    lightBold: 600,
    bold: 700
  },
  "h1-primary": {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "50px",
    lineHeight: "1",
    color: colors.textPrimary,
    letterSpacing: "normal",
    [breakpoints.up("sm")]: {
      fontSize: "60px",
      lineHeight: "1.2"
    },
    [breakpoints.up("md")]: {
      fontSize: "80px",
      lineHeight: "1.3"
    }
  },
  "h1-secondary": {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "50px",
    lineHeight: "1",
    letterSpacing: "normal",
    color: colors.textSecondary,
    [breakpoints.up("sm")]: {
      fontSize: "60px",
      lineHeight: "1.2"
    },
    [breakpoints.up("md")]: {
      fontSize: "80px",
      lineHeight: "1.3"
    }
  },
  "h3-primary": {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "32px",
    lineHeight: "1.1",
    letterSpacing: "normal"
  },
  "h4-primary": {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "25px",
    lineHeight: "1.1",
    letterSpacing: "normal",
    color: colors.textPrimary
  },
  "h4-secondary": {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "25px",
    lineHeight: "1.1",
    letterSpacing: "normal",
    color: colors.textSecondary
  },
  "h5-primary": {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "1.1",
    letterSpacing: "normal",
    color: colors.textPrimary
  },
  "paragraph-primary": {
    fontStyle: "normal",
    fontWeight: 350,
    fontSize: "18px",
    lineHeight: "1.4",
    letterSpacing: "0.2",
    color: colors.textPrimary
  },
  "paragraph-secondary": {
    fontStyle: "normal",
    fontWeight: 350,
    fontSize: "18px",
    lineHeight: "1.4",
    letterSpacing: "0.2",
    color: colors.textSecondary
  },
  "button-text": {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "1.4",
    letterSpacing: "1",
    color: colors.textSecondary
  }
};
