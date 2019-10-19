import React from "react";

import { Box, withStyles } from "@material-ui/core";

const Styles = theme => ({
  root: {
    width: "10%",
  }
});

const Right = ({ classes }) => <Box classes={{ root: classes.root }}></Box>;

export default withStyles(Styles)(Right);
