import URL from "../../helper/url";
import * as axios from "axios";

export const fetchProfile = async () => {
  return await fetchData("get", URL.profile);
};

const defaultHeaders = () => ({
  accept: ContentTypes.JSON,
  "Content-Type": ContentTypes.JSON
});

const ContentTypes = {
  JSON: "application/json;charset=UTF-8",
  FILE: "application/x-www-form-urlencoded"
};

const handleError = error => {
  console.log(`Error while  ${error}`);
};

const fetchData = (method, url) => {
  return axios(url, {
    headers: defaultHeaders(),
    method
  })
    .then(response => response.data)
    .catch(error => handleError(error));
};
