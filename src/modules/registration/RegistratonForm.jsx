import { Box, Select } from '@material-ui/core';
import { withFormik } from 'formik';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const RegistrationForm = ({ values, handleChange, handleSubmit }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <Box>
        <Select name='patient' value={values.patient} onChange={handleChange}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </Box>
      <Box>
        <Button type='submit' variant="contained" color="primary" >
          Primary
        </Button>
      </Box>
    </form>
  </div>
);

const formikOption = {
  handleChange: (event, values) => {
    console.log('***')
    values[event.target.key] = event.target.value;
  },
  handleSubmit: (values,{props}) => {
    console.log(JSON.stringify(values));
  }
};
export default withFormik(formikOption)(RegistrationForm);
