import Router from 'next/router';
import jwt_decode from 'jwt-decode';

export const validate = (intl, validator) => value => {
  const result = validator(value);
  return result ? intl.formatMessage({ id: result, defaultMessage: 'Error' }) : '';
};

export const validatePassword = (value = '') => (value ? '' : 'validations.invalid.password');

export const validateEmail = (value = '') =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? '' : 'validations.invalid.email';

export const navigateTo = path => {
  Router.push(path);
};
