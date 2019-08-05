import React from "react";

import { Box, withStyles } from "@material-ui/core";

import withLayout from "../layouts/WithLayoutProvider";
import Typography from "../components/Typography";

const styles = theme => ({
  colorTextPrimary: {
    color: theme.textPrimary
  }
});

const Index = ({ classes }) => {
  return (
    <Box mt={{ sm: 7 }} pl={{sm: 12}}>
      <Typography type="h1-primary">Work in progress</Typography>
    </Box>
  );
};

export default withLayout(withStyles(styles)(Index));
