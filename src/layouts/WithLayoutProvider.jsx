import { withStyles, Box } from "@material-ui/core";

import Header from "./Header";
import { compose } from "redux";

const styles = theme => ({
  container: {
    margin: 0,
    padding: 0,
    background: theme.background,
    width: "100%",
    minHeight: "100vh"
  },
  main: {
    flex: 1,
    display:"flex",
    flexDirection: "column",
  }
});

const withLayout = WrappedComponent => ({ classes, ...props }) => (
  <Box display="flex" flexDirection="column" className={classes.container}>
    <Header />
    <main className={classes.main}>
      <WrappedComponent {...props} />
    </main>
  </Box>
);

export default compose(
  withStyles(styles),
  withLayout
);
