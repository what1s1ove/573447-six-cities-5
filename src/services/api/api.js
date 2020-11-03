import axios from 'axios';
import {HttpCode} from '~/common/enums/enums';
import {checkIsWhiteRoute} from './helpers';
import {unauthorizedWhiteRoutes} from './common';

const BASE_URL = `https://5.react.pages.academy/six-cities`;
const REQUEST_TIMEOUT = 5000;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: REQUEST_TIMEOUT,
  withCredentials: true,
});

const createAPI = ({onUnauthorized}) => {
  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;
    const {config} = response;

    switch (response.status) {
      case HttpCode.UNAUTHORIZED: {
        const isWhiteRoute = checkIsWhiteRoute(config.url, unauthorizedWhiteRoutes);

        if (!isWhiteRoute) {
          onUnauthorized();
        }
      }
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {createAPI};
