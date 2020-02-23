import React, { useEffect } from "react";

import { Box, withStyles } from "@material-ui/core";
import Introduction from "../introduction/introduction";
import About from "../about/About";
import Experience from "../experience/Experience";
import Work from "../work/Work";
import Contact from "../contact/Contact";

const styles = theme => ({
  container: {
    maxWidth: theme.spacing(250),
    margin: "0 auto"
  }
});

const Profile = ({ classes, profile, getProfile }) => {
  const { name, quickIntroduction } = profile;
  useEffect(() => {
    getProfile();
  }, [getProfile]);
  if (!profile.name) {
    return <></>;
  }
  return (
    <Box mt={{ sm: 15 }} classes={{ root: classes.container }}>
      <Introduction name={name} quickIntroduction={quickIntroduction} />
      <About />
      <Experience />
      <Work />
      <Contact />
    </Box>
  );
};

export default withStyles(styles)(Profile);
