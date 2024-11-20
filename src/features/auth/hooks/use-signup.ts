import { useMutation } from '@tanstack/react-query';
import { postUserSignUp } from '../api/signup-api';
import { AuthResponse, SignUpRequest } from '../types/auth.types';
import { storeUserCredential } from '@/services/user-service';
import { ErrorResponse } from '@/types/api.types';

export const useSignUp = () => {
  const mutation = useMutation<AuthResponse, ErrorResponse, SignUpRequest>({
    mutationFn: postUserSignUp,
    onSuccess: async ({ user, access_token }) => {
      await storeUserCredential(user, access_token);
    },
  });
  return mutation;
};

export default useSignUp;
