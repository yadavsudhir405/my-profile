import React from "react";

import { Box, withStyles } from "@material-ui/core";

const Styles = theme => ({
  root: {
    width: "40px",
    position: "fixed",
    left: "40px",
    right: "auto",
    bottom: "0px",
    height: "90%"
  }
});

const Left = ({ classes }) => <Box classes={{ root: classes.root }}></Box>;

export default withStyles(Styles)(Left);
