import { z } from '@/libs/zod';

export const SignInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).min(1),
});

export type SignInRequest = z.infer<typeof SignInFormSchema>;
