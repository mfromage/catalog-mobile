import { User } from '@/types/user.types';
import { SignInRequest } from '../types/auth.types';
import api from '@/libs/axios';

export type SignInResponse = {
  access_token: string;
  user: User;
};

export const postUserSignIn = async (
  request: SignInRequest,
): Promise<SignInResponse> => {
  const response = await api.post('/login', request);
  return response.data;
};
