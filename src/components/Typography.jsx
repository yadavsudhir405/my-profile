import { makeStyles, withTheme } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const getStyles = props => {
  const { type, theme, color } = props;
  if (typeof(type) ==='string' && color !== undefined) {
    return { ...theme.typography[type], color };
  }
  if (typeof(type) ==='string') {
    return { ...theme.typography[type]};
  }

  if (color !== undefined) {
    return { ...theme.typography['paragraph-primary'], color};
  }
  return { ...theme.typography['paragraph-primary']}
};

const useStyles = makeStyles({
  root: getStyles
});
const StyledTypography = ({ children, ...rest }) => {
  const classes = useStyles(rest);
  return <Typography classes={classes}>{children}</Typography>;
};

export default withTheme(StyledTypography);
