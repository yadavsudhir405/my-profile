import URL from '../url';
import { getCookie } from '../auth';

jest.mock('../auth', () => ({
  getCookie: jest.fn(),
}));

describe('URLs', () => {
  const clientId = 'dummyClientId';
  beforeEach(() => {
    process.env = Object.assign(process.env, { CLIENT_ID: clientId });
  });

  it('should get correct user profile url', () => {
    const cxaOne = 'https://apollo-twtmp-web.azurewebsites.net';
    const userId = '1';
    getCookie.mockReturnValue(userId);
    const actual = URL.userProfile;
    const expected = `${cxaOne}/api/3/clients/${clientId}/users/${userId}/profile`;

    expect(actual).toEqual(expected);
  });

  it('should get correct login url', () => {
    const serviceIdentifier = 'auth-service';
    const expected = `/${serviceIdentifier}/OAuth/token`;
    const actual = URL.login;

    expect(actual).toEqual(expected);
  });

  it('should get claim items url', () => {
    getCookie.mockReturnValue('1');
    const expected = `https://apollo-twtmp-web.azurewebsites.net/api/3/clients/dummyClientId/users/1/claimitems`;

    const actual = URL.claimItems;

    expect(actual).toEqual(expected);
  });

  it('should get get claim fields url', () => {
    getCookie.mockReturnValue('1');
    const expected = `https://apollo-twtmp-web.azurewebsites.net/api/3/clients/dummyClientId/users/1/plans/2019/claimItems/12/fields`;

    const actual = URL.claimFields('2019', '12');

    expect(actual).toEqual(expected);
  });

  it('should get submit claim url', () => {
    getCookie.mockReturnValue('1');
    const expected = `https://apollo-twtmp-web.azurewebsites.net/api/3/clients/dummyClientId/users/1/claims`;

    const actual = URL.submitClaim;

    expect(actual).toEqual(expected);
  });
});
