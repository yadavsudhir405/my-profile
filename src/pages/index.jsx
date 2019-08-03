import React from "react";
import withLayout from "../layouts/WithLayoutProvider";
import { Typography, Box, withStyles } from "@material-ui/core";

const styles = theme => ({
  colorTextPrimary: {
    color: theme.textPrimary
  }
});

const Index = ({ classes }) => {
  return (
    <Box display="flex" flex="1" alignItems="center" justifyContent="center" >
      <Box >
        <Typography
          variant="h1"
          classes={{ colorTextPrimary: classes.colorTextPrimary }}
          color="textPrimary"
        >
          Work in progress
        </Typography>
      </Box>
    </Box>
  );
};

export default withLayout(withStyles(styles)(Index));
