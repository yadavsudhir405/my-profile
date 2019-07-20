import jwt_decode from 'jwt-decode';

import { createCookies, getCookie, getUserIdFromIdToken } from '../auth';
import { error } from '../../constants/auth';

jest.mock('jwt-decode');

describe('Authentication Utils', () => {
  it('should save tokens', () => {
    createCookies('dummy id token', 'dummy access token', 'dummy user id');

    expect(document.cookie).toEqual(
      'id_token=dummy id token; access_token=dummy access token; user_id=dummy user id',
    );
  });
});

describe('login error keys', () => {
  it('should have the Unauthorized key', () => {
    expect(Object.keys(error.login.messageKeys).includes('Unauthorized')).toBeTruthy();
    expect(error.login.messageKeys['Unauthorized']).toEqual('login.error.unauthorized');
  });
});

describe('cookie', () => {
  it('getCookie', () => {
    document.cookie = 'id_token=dummyToken;';
    const idToken = getCookie('id_token');

    expect(idToken).toEqual('dummyToken');
  });
});

describe('Parse jwt token', () => {
  it('should be able to extract the userId from the token', () => {
    jwt_decode.mockImplementation(() => ({
      sub: 'user|1',
    }));
    const expected = '1';
    const actual = getUserIdFromIdToken('dummyToken');

    expect(actual).toEqual(expected);
  });
});
