import { AuthResponse, SignInRequest } from '../types/auth.types';
import api from '@/libs/axios';

export const postUserSignIn = async (
  request: SignInRequest,
): Promise<AuthResponse> => {
  const response = await api.post('/login', request);
  return response.data;
};
