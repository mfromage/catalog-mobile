import { User } from '@/types/user.types';

// Mock storage to simulate SecureStore behavior
let mockStorage: { [key: string]: string } = {};

// Reset mock storage helper
export const resetMockStorage = () => {
  mockStorage = {};
};

export const storeUserCredential = jest.fn(async (user: User, accessToken: string) => {
  mockStorage['default-user'] = JSON.stringify(user);
  mockStorage['default-access-token'] = accessToken;
});

export const getStoredUser = jest.fn(async (): Promise<User | null> => {
  const userString = mockStorage['default-user'];
  return userString ? JSON.parse(userString) as User : null;
});

export const getStoredAccessToken = jest.fn(async (): Promise<string | null> => {
  return mockStorage['default-access-token'] || null;
});

export const clearUserCredential = jest.fn(async () => {
  delete mockStorage['default-user'];
  delete mockStorage['default-access-token'];
});
