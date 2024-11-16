import axios, { AxiosError } from 'axios';
import { AppConfig } from '@/app/app-config';

const api = axios.create({
  baseURL: AppConfig.apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  async config => {
    //todo: add access token to request header
    // config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  response => {
    return response;
  },
  (error: AxiosError) => {
    // Handle errors globally
    if (error.response) {
      if (error.response.status === 401) {
        //todo: handle unauthorized error
      }
      //todo: transform error response
      return Promise.reject(error);
    }

    return Promise.reject(error);
  },
);

export default api;
