import colors from "./colors";

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
  "h1-primary":{
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "80px",
    lineHeight: "1.1",
    letterSpacing: "-1.5px",
    color: colors.textPrimary,

  },
  "h1-secondary": {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "80px",
    lineHeight: "1.1",
    letterSpacing: "-1.5px",
    color: colors.textSecondary,
  },
  "h3-primary":{
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "32px",
    lineHeight: "1.1",
    letterSpacing: "-1.5px",
  },
  "h4-primary":{
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "25px",
    lineHeight: "1.1",
    letterSpacing: "-1.5px",
    color: colors.textPrimary,
  },
  "h4-secondary":{
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "25px",
    lineHeight: "1.1",
    letterSpacing: "-1.5px",
    color: colors.textSecondary,
  },
  "h5-primary":{
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "1.1",
    letterSpacing: "-1.5px",
    color: colors.textPrimary,
  },
  "paragraph":{
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "1.1",
    letterSpacing: "-1.5px",
    color: colors.textSecondary,
  }
};
