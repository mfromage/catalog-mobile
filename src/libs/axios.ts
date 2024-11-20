import axios, { AxiosError } from 'axios';
import { AppConfig } from '@/app/app-config';

import { ErrorResponse } from '@/types/api.types';
import {
  clearUserCredential,
  getStoredAccessToken,
} from '@/services/user-service';

const api = axios.create({
  baseURL: AppConfig.apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  async config => {
    const accessToken = await getStoredAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

const mapErrorResponse = (error: AxiosError): ErrorResponse => ({
  message: (error.response?.data as ErrorResponse).message || error.message,
});

api.interceptors.response.use(
  response => {
    return response;
  },
  (error: AxiosError) => {
    // Handle errors globally
    if (error.response) {
      if (error.response.status === 401) {
        clearUserCredential();
      }
      return Promise.reject(mapErrorResponse(error));
    }

    return Promise.reject(error);
  },
);

export default api;
