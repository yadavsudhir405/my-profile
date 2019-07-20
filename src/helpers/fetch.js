import axios from 'axios';
import { getCookie } from './auth';

const ContentTypes = {
  JSON: 'application/json;charset=UTF-8',
};

const defaultHeader = () => ({
  accept: ContentTypes.JSON,
  'Content-Type': ContentTypes.JSON,
});

const headerWithAuth = () => ({
  Authorization: 'Bearer ' + getCookie('access_token'),
});

const handleError = error => {
  if (error.response) {
    return {
      error: true,
      ...error.response.data.errors[0],
    };
  } else {
    //TODO redirect to common Error Page
    console.log(`Error : ${error.message}`);
  }
};

export const fetchDataWithAuth = (method, url, body) =>
  fetchData(method, url, body, headerWithAuth());

export const fetchData = (method, url, body, headers = defaultHeader()) => {
  return axios(url, {
    headers,
    method,
    data: JSON.stringify(body),
  })
    .then(response => response.data)
    .catch(handleError);
};
