import axios from 'axios';
import {fetchData, fetchSuccess, fetchError} from './ApiAction';
import {BASE_URL} from './ApiConstants';

let ApiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

ApiClient.interceptors.request.use(
  async configure => {
    //console.log("Bearer token is " + global.UserData.token);
    if (global.UserData != null) {
      configure.headers.Authorization = '';
    }
    //configure.headers.post["Content-Type"] = "multipart/form-data";
    return configure;
  },
  error => {
    return Promise.reject(error);
  },
);

export const apiGet = url => dispatch => {
  dispatch(fetchData());
  return new Promise(() => {
    ApiClient.get(url)
      .then(response => {
        dispatch(fetchSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchError(error));
        console.log(error);
      });
  });
};

export const apiPost = (url, params) => dispatch => {
  dispatch(fetchData());
  return new Promise(() => {
    ApiClient.post(url, params)
      .then(response => {
        dispatch(fetchSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchError(error));
        console.log(error);
      });
  });
};
