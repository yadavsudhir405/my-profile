import React from "react";

import { Box, withStyles } from "@material-ui/core";

import Typography from "../../components/Typography";

const styles = () => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "Center"
  }
});

const About = ({classes}) => (
  <Box id="about" classes={{root: classes.root}}>
    <Typography> About Section</Typography>
  </Box>
);

export default withStyles(styles)(About);
