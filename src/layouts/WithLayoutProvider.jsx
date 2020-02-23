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
  main: ({ theme }) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    margin: "0 auto",
    maxWidth: theme.spacing(400),
    [theme.breakpoints.between('lg', 'xl')]: {
      paddingLeft: theme.spacing(40),
      paddingRight: theme.spacing(40),
    },

  }),
  content: {
    width: "100%",
  },
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
        <Hidden smDown>
          <Right />
        </Hidden>
        <Box className={classes.content}>
          <main className={classes.main}>
            <WrappedComponent {...props} />
          </main>
          <Box className="footer"></Box>
        </Box>
      </Box>
    </>
  );
};

export default withLayout;
