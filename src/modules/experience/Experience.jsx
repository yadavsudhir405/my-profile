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

const Experience = ({ classes }) => (
  <Box id="experience" classes={{ root: classes.root }}>
    <Typography> Experience Section</Typography>
  </Box>
);

export default withStyles(styles)(Experience);
