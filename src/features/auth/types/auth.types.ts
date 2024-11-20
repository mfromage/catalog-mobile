import i18n from '@/libs/i18n';
import { z } from '@/libs/zod';
import { User } from '@/types/user.types';
export const SignInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).min(1),
});

export type SignInRequest = z.infer<typeof SignInFormSchema>;

export const SignUpFormSchema = z
  .object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6).min(1),
    password_confirmation: z.string().min(6).min(1),
  })
  .superRefine(({ password_confirmation, password }, ctx) => {
    if (password_confirmation !== password) {
      ctx.addIssue({
        code: 'custom',
        message: i18n.t('signin.confirm-password-not-match'),
        path: ['password_confirmation'],
      });
    }
  });

export type SignUpRequest = z.infer<typeof SignUpFormSchema>;

export type AuthResponse = {
  access_token: string;
  user: User;
};