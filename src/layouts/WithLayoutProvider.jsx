import { Box, Hidden, useTheme } from "@material-ui/core";

import Header from "./Header";
import { makeStyles } from "@material-ui/styles";
import Left from "./Left";
import Right from "./Right";
const useStyles = makeStyles({
  container: ({ theme }) => ({
    margin: 0,
    padding: 0,
    background: theme.background,
    width: "100%",
    minHeight: "100vh"
  }),
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  }
});

const withLayout = WrappedComponent => props => {
  const classes = useStyles({ theme: useTheme() });

  return (
    <>
      <Header />
      <Box display="flex" className={classes.container}>
        <Hidden smDown>
          <Left />
        </Hidden>
        <main className={classes.main}>
          <WrappedComponent {...props} />
        </main>
        <Hidden smDown>
          <Right />
        </Hidden>
      </Box>
    </>
  );
};

export default withLayout;
