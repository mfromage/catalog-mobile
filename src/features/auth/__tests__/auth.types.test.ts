import { SignInFormSchema, SignUpFormSchema } from '../types/auth.types';
import i18n from '@/libs/i18n';

describe('Auth Types', () => {
  describe('SignInFormSchema', () => {
    it('should validate correct sign in data', () => {
      const validData = {
        email: 'test@example.com',
        password: 'password123',
      };

      const result = SignInFormSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should fail with invalid email', () => {
      const invalidData = {
        email: 'invalid-email',
        password: 'password123',
      };

      const result = SignInFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].path[0]).toBe('email');
      }
    });

    it('should fail with short password', () => {
      const invalidData = {
        email: 'test@example.com',
        password: '12345',
      };

      const result = SignInFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].path[0]).toBe('password');
      }
    });
  });

  describe('SignUpFormSchema', () => {
    it('should validate correct sign up data', () => {
      const validData = {
        name: 'John Doe',
        email: 'test@example.com',
        password: 'password123',
        passwordConfirmation: 'password123',
      };

      const result = SignUpFormSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should fail with short name', () => {
      const invalidData = {
        name: 'Jo',
        email: 'test@example.com',
        password: 'password123',
        passwordConfirmation: 'password123',
      };

      const result = SignUpFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].path[0]).toBe('name');
      }
    });
  });
});
