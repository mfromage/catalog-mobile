import { useMutation } from '@tanstack/react-query';
import { postUserSignIn, SignInResponse } from '../api/signin-api';
import { SignInRequest } from '../types/auth.types';
import { ErrorResponse } from '@/types/api.types';
import { storeUserCredential } from '@/services/user-service';

export const useSignIn = () => {
  const mutation = useMutation<SignInResponse, ErrorResponse, SignInRequest>({
    mutationFn: postUserSignIn,
    onSuccess: async ({ user, access_token }) => {
      await storeUserCredential(user, access_token);
    },
  });
  return mutation;
};

export default useSignIn;
