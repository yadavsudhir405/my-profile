import React, { useEffect } from "react";

import { Box } from "@material-ui/core";
import Introduction from "../introduction/introduction";
import About from "../about/About";
import Experience from "../experience/Experience";
import Work from "../work/Work";
import Contact from "../contact/Contact";

const Profile = ({ profile, getProfile }) => {
  const { name, quickIntroduction } = profile;
  debugger;
  useEffect(() => {
    getProfile();
  }, [getProfile]);
  return (
    <Box mt={{ sm: 7 }} pl={{ sm: 12 }}>
      <Introduction name={name} quickIntroduction={quickIntroduction} />
      <About />
      <Experience />
      <Work />
      <Contact />
    </Box>
  );
};

export default Profile;
