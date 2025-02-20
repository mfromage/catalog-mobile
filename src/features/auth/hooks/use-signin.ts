import { useMutation } from '@tanstack/react-query';
import { postUserSignIn } from '../api/signin-api';
import { AuthResponse, SignInRequest } from '../types/auth.types';
import { storeUserCredential } from '@/services/user-service';
import { ErrorResponse } from '@/types/api.types';

export const useSignIn = () => {
  const mutation = useMutation<AuthResponse, ErrorResponse, SignInRequest>({
    mutationFn: postUserSignIn,
    onSuccess: async ({ user, access_token }) => {
      await storeUserCredential(user, access_token);
    },
  });
  return mutation;
};

export default useSignIn;
