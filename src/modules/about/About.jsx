import React from "react";

import { Box, withStyles } from "@material-ui/core";

import Typography from "../../components/Typography";

const styles = theme => ({
  root: {},
  container: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column"
    }
  },
  aboutDetails: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "50%"
    }
  },
  imageContainer: {
    backgroundColor: `${theme.primary}`,
    borderRadius: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      height: "250px",
      width: "250px"
    },
    [theme.breakpoints.down("md")]: {
      height: "300px",
      width: "100%"
    }
  },
  alignCenter: {
    flexGrow: "0"
  }
});

const About = ({ classes, about }) => {
  const { heading, mainIntroduction, extendedIntroduction } = about;
  return (
    <Box
      id="about"
      component="section"
      classes={{ root: classes.root }}
      pt={{ xs: 25, md: 38 }}
    >
      <Box>
        <Typography> {heading}</Typography>
      </Box>
      <Box className={classes.container} mt={8}>
        <Box className={classes.aboutDetails}>
          <Box mb={5}>
            <Typography>{mainIntroduction}</Typography>
          </Box>
          <Box mt={{ xs: 4, sm: 10 }} mb={{ xs: 10 }}>
            <Typography>{extendedIntroduction}</Typography>
          </Box>
        </Box>
        <Box className={classes.imageContainer}>
          <Box className={classes.alignCenter}>
            <Typography color="blue">No Image</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default withStyles(styles)(About);
