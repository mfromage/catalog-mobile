import { AuthResponse, SignUpRequest } from '../types/auth.types';
import api from '@/libs/axios';

export const postUserSignUp = async (
  request: SignUpRequest,
): Promise<AuthResponse> => {
  const response = await api.post('/register', request);
  return response.data;
};
