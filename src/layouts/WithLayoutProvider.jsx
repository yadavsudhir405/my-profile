import { Box, useTheme } from "@material-ui/core";

import Header from "./Header";
import { makeStyles } from "@material-ui/styles";
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
    <Box display="flex" flexDirection="column" className={classes.container}>
      <Header />
      <main className={classes.main}>
        <WrappedComponent {...props} />
      </main>
    </Box>
  );
};

export default withLayout;
