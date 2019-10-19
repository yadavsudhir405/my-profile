import React from "react";

import { Box } from "@material-ui/core";

import withLayout from "../layouts/WithLayoutProvider";
import About from "../modules/about/About";
import Experience from "../modules/experience/Experience";
import Contact from "../modules/contact/Contact";
import Work from "../modules/work/Work";
import Introduction from "../modules/introduction/introduction";

const Index = () => {
  return (
    <Box mt={{ sm: 7 }} pl={{ sm: 12 }}>
      <Introduction/>
      <About />
      <Experience />
      <Work />
      <Contact />
    </Box>
  );
};

export default withLayout(Index);
