import React, { useState } from "react";

import {
  AppBar,
  Box,
  Hidden,
  Link,
  List,
  ListItem,
  Toolbar,
  withStyles,
  Button,
  MenuItem,
  ListItemText
} from "@material-ui/core";

import Images from "../constants/images";
import NAV_LIST from "./NavList";
import Typography from "../components/Typography";

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
  },
  menuPopup: {
    backgroundColor: theme.background,
    color: theme.textPrimary,
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0"
  },
  links: {
    textAlign: "center"
  }
});

const Header = ({ classes }) => {
  const [popDisplay, setPopDisplay] = useState("none");
  const handleClick = event => {
    setPopDisplay("Block");
  };
  const closePopup = () => {
    setPopDisplay("none");
  };
  const renderNav = () => (
    <Hidden smDown>
      <List classes={{ root: classes.ulRoot }}>
        {NAV_LIST.map((nav, index) => (
          <ListItem
            key={`nav-${index}`}
            classes={{ root: classes.listItemRoot }}
          >
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
    </Hidden>
  );
  const renderMobileMenu = () => (
    <Hidden mdUp>
      <Box flex="1" display="flex" flexDirection="row-reverse">
        <img src={Images.MENU} alt="Menu" onClick={handleClick} />
      </Box>
      <Box display={popDisplay} classes={{ root: classes.menuPopup }}>
        <Box display='flex' flexDirection='row-reverse'>
          <Button onClick={closePopup}><Typography> Close</Typography></Button>
        </Box>
        <List alignItems="center">
          {NAV_LIST.map((nav, index) => (
            <ListItem
              classes={{ root: classes.links }}
              button
              key={`menu-${index}`}
            >
              <ListItemText>{nav.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </Hidden>
  );
  return (
    <AppBar
      position="static"
      classes={{ colorPrimary: classes.appBarBackgroundColor }}
    >
      <Toolbar classes={{ gutters: classes.gutters }}>
        <img src={Images.LOGO} alt="logo" />
        {renderNav()}
        {renderMobileMenu()}
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
