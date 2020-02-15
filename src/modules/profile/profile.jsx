import React from "react";

import { Box } from "@material-ui/core";
import Introduction from "../introduction/introduction";
import About from "../about/About";
import Experience from "../experience/Experience";
import Work from "../work/Work";
import Contact from "../contact/Contact";

const Profile = () => (
  <Box mt={{ sm: 7 }} pl={{ sm: 12 }}>
    <Introduction />
    <About />
    <Experience />
    <Work />
    <Contact />
  </Box>
);

export default Profile;
