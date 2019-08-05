import React from "react";

import { AppBar, Button, Toolbar, withStyles } from "@material-ui/core";

import Images from "../constants/images";
import Typography from "../components/Typography";

const styles = theme => ({
  appBarBackgroundColor: {
    backgroundColor: theme.background
  },
  menuButton: {},
  colorTextPrimary: {
    color: theme.textPrimary
  }
});

const NavBar = ({ classes }) => (
  <AppBar
    position="static"
    color="primary"
    classes={{ colorPrimary: classes.appBarBackgroundColor }}
  >
    <Toolbar>
      <img src={Images.LOGO} alt="logo" />
      <Typography type="h5-primary">
        About
      </Typography>
      <Button color="inherit">
        <Typography type="h5-primary">
          Experience
        </Typography>
      </Button>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(NavBar);
