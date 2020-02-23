import React from "react";

import { Box, Button } from "@material-ui/core";
import Typography from "../../components/Typography";

const Introduction = ({ name, quickIntroduction }) => (
  <Box component="section">
    <Box>
      <Typography> Hi, my name is </Typography>
    </Box>
    <Box>
      <Typography>{name}</Typography>
    </Box>
    <Box>
      <Typography> I build things for the web. </Typography>
    </Box>
    <Box>
      <Typography>
        {quickIntroduction}
      </Typography>
    </Box>

    <Box>
      <Button variant="contained" color="primary">
        {" "}
        Get In Touch
      </Button>
    </Box>
  </Box>
);

export default Introduction;
