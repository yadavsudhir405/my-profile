import React from "react";

import { Box, Button } from "@material-ui/core";
import Typography from "../../components/Typography";

const Introduction = () => (
  <Box>
    <Box>
      <Box>
        <Typography> Hi, my name is </Typography>
      </Box>
      <Box>
        <Typography>Sudhir Yadav.</Typography>
      </Box>
      <Box>
        <Typography> I build things for the web. </Typography>
      </Box>
      <Box>
        <Typography>
          I'm a software engineer based in Bangalore-India, BE specializing in
          building high quality websites and applications.
        </Typography>
      </Box>

      <Box>
        <Button variant="contained" color="primary">
          {" "}
          Get In Touch
        </Button>
      </Box>
    </Box>
  </Box>
);

export default Introduction;
