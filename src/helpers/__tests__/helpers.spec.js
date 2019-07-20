import { navigateTo, validate, validateEmail, validatePassword } from '../helpers';
import Router from 'next/router';

jest.mock('next/router');

describe('Helpers', () => {
  describe('Validate', () => {
    it('should return error message if value is invalid', () => {
      const validator = () => 'validations.invalid.email';
      const intl = {
        formatMessage: () => 'invalid value',
      };

      const actual = validate(intl, validator)('testing');

      expect(actual).toBe('invalid value');
    });

    it('should return empty if value is valid', () => {
      const validator = () => '';

      const actual = validate(null, validator)('testing');

      expect(actual).toBe('');
    });
  });

  describe('ValidateEmail', () => {
    it('should return intl error message id if email is missing', () => {
      const actual = validateEmail();

      expect(actual).toBe('validations.invalid.email');
    });

    it('should return intl error message id if email is invalid', () => {
      const actual = validateEmail('testing');

      expect(actual).toBe('validations.invalid.email');
    });

    it('should return empty if email is valid', () => {
      const actual = validateEmail('testing@gmail.com');

      expect(actual).toBe('');
    });
  });

  describe('ValidatePassword', () => {
    it('should return intl error message id if password is missing', () => {
      const actual = validatePassword();

      expect(actual).toBe('validations.invalid.password');
    });

    it('should return intl error message id if password is invalid', () => {
      const actual = validatePassword('');

      expect(actual).toBe('validations.invalid.password');
    });

    it('should return empty if password is valid', () => {
      const actual = validatePassword('testing@gmail.com');

      expect(actual).toBe('');
    });
  });

  it('should navigate to path', () => {
    jest.spyOn(Router, 'push');

    navigateTo('/test-url');

    expect(Router.push).toHaveBeenCalledWith('/test-url');
  });
});
