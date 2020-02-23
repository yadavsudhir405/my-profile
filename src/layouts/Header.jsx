/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";

import {
  AppBar,
  Box,
  Button,
  Hidden,
  Link,
  List,
  ListItem,
  Slide,
  Toolbar, useScrollTrigger,
  withStyles
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
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    },
    justifyContent: "flex-end"
  },
  listItemRoot: {
    width: "auto",
    justifyContent: "center",
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
    paddingRight: theme.spacing(12),
    minHeight: theme.spacing(25),
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    }
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
  const renderLinks = () => (
    <List classes={{ root: classes.ulRoot }}>
      {NAV_LIST.map((nav, index) => (
        <ListItem key={`nav-${index}`} classes={{ root: classes.listItemRoot }}>
          <Link
            underline="none"
            href={`#${nav.url}`}
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
  );
  const renderNav = () => <Hidden smDown>{renderLinks()}</Hidden>;
  const renderMobileMenu = () => (
    <Hidden mdUp>
      <Box flex="1" display="flex" flexDirection="row-reverse">
        <img src={Images.MENU} alt="Menu" onClick={handleClick} />
      </Box>
      <Box display={popDisplay} classes={{ root: classes.menuPopup }}>
        <Box display="flex" flexDirection="row-reverse">
          <Button onClick={closePopup}>
            <Typography> Close</Typography>
          </Button>
        </Box>
        {renderLinks()}
      </Box>
    </Hidden>
  );

  const trigger = useScrollTrigger();
  return (
    <Slide direction="down" in={!trigger}>
      <AppBar
        position="fixed"
        classes={{ colorPrimary: classes.appBarBackgroundColor }}
      >
        <Toolbar classes={{ gutters: classes.gutters }}>
          <Link href="/">
            <img src={Images.LOGO} alt="logo" />
          </Link>
          {renderNav()}
          {renderMobileMenu()}
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default withStyles(styles)(Header);
