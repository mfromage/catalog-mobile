import { API_BASE_URL } from '@env';

const baseUrl = API_BASE_URL;

export const AppConfig = {
  apiBaseUrl: baseUrl ?? 'http://localhost:8080',
};
