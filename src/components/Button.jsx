import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  root: {
    padding: "16px 20px"
  }
});

const StyledButton = ({ classes, children, ...rest }) => {
  return (
    <Button {...rest} classes={{ root: classes.root }}>
      {children}
    </Button>
  );
};

export default withStyles(styles)(StyledButton);
