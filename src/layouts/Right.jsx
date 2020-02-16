import React from "react";

import { Box, withStyles } from "@material-ui/core";

const Styles = (theme) => ({
  root: {
    width: theme.spacing(10),
    position: "fixed",
    right: theme.spacing(10),
    left: "auto",
    bottom: "0px",
    height: "90%"
  }
});

const Right = ({ classes }) => <Box classes={{ root: classes.root }}></Box>;

export default withStyles(Styles)(Right);
