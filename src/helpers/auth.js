import { ACCESS_TOKEN, ID_TOKEN, USER_ID } from '../constants/auth';
import jwt_decode from 'jwt-decode';

export const createCookies = (idToken, accessToken, userId) => {
  document.cookie = `${ID_TOKEN}=${idToken};samesite=strict`;
  document.cookie = `${ACCESS_TOKEN}=${accessToken};samesite=strict`;
  document.cookie = `${USER_ID}=${userId};samesite=strict`;
};

export const getCookie = name => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  return parts
    .pop()
    .split(';')
    .shift();
};

export const getUserIdFromIdToken = id_token => jwt_decode(id_token)['sub'].split('|')[1];
