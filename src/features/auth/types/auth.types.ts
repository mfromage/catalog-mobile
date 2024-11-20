import i18n from '@/libs/i18n';
import { z } from '@/libs/zod';
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
    passwordConfirmation: z.string().min(6).min(1),
  })
  .superRefine(({ passwordConfirmation, password }, ctx) => {
    if (passwordConfirmation !== password) {
      ctx.addIssue({
        code: 'custom',
        message: i18n.t('signin.confirm-password-not-match'),
        path: ['passwordConfirmation'],
      });
    }
  });

export type SignUpRequest = z.infer<typeof SignUpFormSchema>;
