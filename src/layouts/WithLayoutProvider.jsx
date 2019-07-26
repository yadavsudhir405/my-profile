import { withStyles, Box } from "@material-ui/core";

import Header from "./Header";
import { compose } from "redux";

const styles = theme => ({
  container: {
    margin: "0",
    padding: "0",
    background: theme.background,
    minHeight: "100vh"
  },
  main: {
    flex: 1,
    maxWidth: "1280px"
  }
});

const withLayout = WrappedComponent => ({ classes, ...props }) => (
  <Box display="flex" flexDirection="column" className={classes.container}>
    <Header />
    <main>
      <WrappedComponent {...props} className={classes.main} />
    </main>
  </Box>
);

export default compose(
  withStyles(styles),
  withLayout
);
