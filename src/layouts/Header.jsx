import React, { useState } from "react";

import {
  AppBar,
  Box,
  Hidden,
  Link,
  List,
  ListItem,
  Menu,
  MenuItem,
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
  },
  menuRoot: {
    backgroundColor: theme.background,
    color: theme.textPrimary,
  }
});

const Header = ({ classes }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState(null);

  const handleMenuClose = () => {
    setMenuOpen(false);
  };
  const handleClick = (event) => {
    setMenuOpen(true);
    setMenuIcon(event.currentTarget);
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
      <Menu
        open={menuOpen}
        onClose={handleMenuClose}
        keepMounted
        anchorEl={menuIcon}
        classes={{paper: classes.menuRoot}}
      >
        {NAV_LIST.map((nav, index) => (
          <MenuItem key={`menu-${index}`}>{nav.name}</MenuItem>
        ))}
      </Menu>
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
