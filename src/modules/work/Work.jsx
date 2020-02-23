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
const Work = ({classes}) => (
  <Box id="work" classes={{root: classes.root}}>
    <Typography> Work Section</Typography>
    <Typography> Coming Soon</Typography>
  </Box>
);

export default withStyles(styles)(Work);
