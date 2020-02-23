import React from "react";

import { Box, withStyles } from "@material-ui/core";
import Typography from "../../components/Typography";
import StyledButton from "../../components/Button";
import colors from "../../themes/colors";

const styles = (theme) => ({
  root: {
    minHeight: "100vh"
  },
  quickIntro: {
    [theme.breakpoints.up("sm")]: {
      width: "50%"
    }
  }
});

const Introduction = ({ classes, name, quickIntroduction }) => (
  <Box
    component="section"
    classes={{ root: classes.root }}
    pt={{ xs: 25, md: 38 }}
  >
    <Box mb={5}>
      <Typography type="h5-primary" color={colors.primary}> Hi, my name is </Typography>
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
      <StyledButton variant="outlined" color="primary">
        {" "}
        <Typography type="button-text" color={colors.primary}>Get In Touch</Typography>
      </StyledButton>
    </Box>
  </Box>
);

export default withStyles(styles)(Introduction);
