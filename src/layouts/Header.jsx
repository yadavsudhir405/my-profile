import React from "react";

import {
  AppBar,
  List,
  Link,
  ListItem,
  Toolbar,
  withStyles
} from "@material-ui/core";

import Images from "../constants/images";
import NAV_LIST from "./NavList";

const styles = theme => ({
  appBarBackgroundColor: {
    backgroundColor: theme.background
  },
  ulRoot: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end"
  },
  listItemRoot: {
    width: "auto",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  linkRoot: {
    color: theme.textPrimary
  },
  underlineNone: {
    "&:hover": {
      color: theme.primary
    }
  },
  gutters: {
    paddingLeft: theme.spacing(12),
    paddingRight: theme.spacing(12)
  }
});

const Header = ({ classes }) => (
  <AppBar
    position="static"
    classes={{ colorPrimary: classes.appBarBackgroundColor }}
  >
    <Toolbar classes={{ gutters: classes.gutters }}>
      <img src={Images.LOGO} alt="logo" />
      <List classes={{ root: classes.ulRoot }}>
        {NAV_LIST.map((nav, index) => (
          <ListItem key={index} classes={{ root: classes.listItemRoot }}>
            <Link
              underline="none"
              href="#"
              classes={{
                root: classes.linkRoot,
                underlineNone: classes.underlineNone
              }}
            >
              {nav.name}
            </Link>
          </ListItem>
        ))}
      </List>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Header);
