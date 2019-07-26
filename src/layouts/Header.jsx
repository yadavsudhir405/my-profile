import { Box, withStyles } from "@material-ui/core";

const styles = theme => ({
  root: {
    height: "20%",
    width: "100%",
    padding: `${theme.spacing(4)}  ${theme.spacing(2)}`,
    boxShadow: "rgba(2, 12, 27, 0.7) 0px 10px 30px -10px"
  }
});

const Header = () => <Box>Header</Box>;

export default withStyles(styles)(Header);
