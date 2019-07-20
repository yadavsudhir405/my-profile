import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { fetchData, fetchDataWithAuth } from '../fetch';

const request = new MockAdapter(axios);

describe('Fetch', () => {
  it('should fetch data based on get method and url', async () => {
    request.onGet('/randomUrl').reply(200, { response: 'testing' });

    const actual = await fetchData('get', '/randomUrl');

    expect(actual.response).toBe('testing');
  });

  it('should fetch data based on post method and url', async () => {
    request.onPost('/randomUrl', { data: 'test@123' }).reply(200, { response: 'testing' });

    const actual = await fetchData('post', '/randomUrl', { data: 'test@123' });

    expect(actual.response).toBe('testing');
  });

  it('should return error if response is not ok', async () => {
    request.onPost('/randomUrl', { data: 'test@123' }).reply(401, {
      errors: [
        {
          messageKey: 'UserAccountBlocked',
          message: 'Your account has been blocked',
        },
      ],
    });

    const actual = await fetchData('post', '/randomUrl', { data: 'test@123' });

    expect(actual.error).toEqual(true);
    expect(actual.messageKey).toEqual('UserAccountBlocked');
  });

  it('should call the console log on network error', async () => {
    console.log = jest.fn();
    request.onPost('/randomUrl', { data: 'test@123' }).networkError();

    await fetchData('post', '/randomUrl', { data: 'test@123' });

    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('Error : Network Error');
  });

  it('should return the response with data', async () => {
    request.onPost('/randomUrl', { data: 'test@123' }).reply(200, { response: 'testing' });
    jest.mock('../auth', () => ({
      getToken: () => 'dummyToken',
    }));
    const actual = await fetchDataWithAuth('post', '/randomUrl', { data: 'test@123' });

    expect(actual.response).toBe('testing');
  });
});
