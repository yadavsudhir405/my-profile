import React from "react";

import { Box, withStyles } from "@material-ui/core";

const Styles = theme => ({
  root: {
    width: "10%"
  }
});

const Left = ({ classes }) => <Box classes={{ root: classes.root }}></Box>;

export default withStyles(Styles)(Left);
