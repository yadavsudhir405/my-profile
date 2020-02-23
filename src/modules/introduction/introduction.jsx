import React from "react";

import { Box, Button, withStyles } from "@material-ui/core";
import Typography from "../../components/Typography";

const styles = () => ({
  root: {
    minHeight: "100vh"
  },
  quickIntro: {
    width: "50%"
  }
});

const Introduction = ({ classes, name, quickIntroduction }) => (
  <Box
    component="section"
    classes={{ root: classes.root }}
    pt={{ xs: 25, md: 38 }}
  >
    <Box mb={5}>
      <Typography type="h5-primary"> Hi, my name is </Typography>
    </Box>
    <Box>
      <Typography type="h1-primary">{name}.</Typography>
    </Box>
    <Box mb={3}>
      <Typography type="h1-secondary"> I build things for the web.</Typography>
    </Box>
    <Box mt={10} className={classes.quickIntro}>
      <Typography type="paragraph-secondary">{quickIntroduction}</Typography>
    </Box>
    <Box mt={20} mb={3}>
      <Button variant="contained" color="primary">
        {" "}
        Get In Touch
      </Button>
    </Box>
  </Box>
);

export default withStyles(styles)(Introduction);
