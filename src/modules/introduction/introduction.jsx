import React from "react";

import { Box, Button, withStyles } from "@material-ui/core";
import Typography from "../../components/Typography";

const styles = () => ({
  root: {
    minHeight: "100vh"
  }
});

const Introduction = ({ classes, name, quickIntroduction }) => (
  <Box component="section" classes={{root: classes.root}} pt={{ xs: 25, md: 38 }}>
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
      <Typography>{quickIntroduction}</Typography>
    </Box>

    <Box>
      <Button variant="contained" color="primary">
        {" "}
        Get In Touch
      </Button>
    </Box>
  </Box>
);

export default withStyles(styles)(Introduction);
