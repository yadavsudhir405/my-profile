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

const Contact = ({classes}) => (
  <Box id="contact" classes={{root: classes.root}}>
    <Typography> Contact Section</Typography>
  </Box>
);

export default withStyles(styles)(Contact);
