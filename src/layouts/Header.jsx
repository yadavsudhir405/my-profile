import { Box, withStyles } from "@material-ui/core";
import Images from "../constants/images";
import React from "react";

const styles = theme => ({
  root: {
    minHeight: '45px',
    width: "100%",
    padding: `${theme.spacing(4)}  ${theme.spacing(4)}`,
    borderBottom: '1px solid red'
  }
});

const Header = ({ classes }) => (
  <Box classes={{ root: classes.root }}>
    <img src={Images.LOGO} alt="logo" />
  </Box>
);

export default withStyles(styles)(Header);
