import RegistrationForm from './RegistratonForm';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';

const styles = theme => {
  return {
    root: {
      background: theme.background1,
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: theme.white,
      height: 48,
      padding: '0 30px',
    },
  };
};

const Registration = ({ classes }) => {
  return (
    <>
      <Button className={classes.root}>Hello</Button>
      <RegistrationForm />
    </>
  );
};

export default withStyles(styles)(Registration);
