import { User } from '@/types/user.types';

// Mock user data
export const mockLoggedInUser: User = {
  id: 'test-id',
  name: 'Test User',
  email: 'test@example.com',
};

export const mockAccessToken = 'mock-access-token';

// State management for mock
let isLoggedIn = false;
let currentUser: User | null = null;
let currentToken: string | null = null;

// Helper to set mock state
export const __setMockLoggedIn = (loggedIn: boolean) => {
  isLoggedIn = loggedIn;
  currentUser = loggedIn ? mockLoggedInUser : null;
  currentToken = loggedIn ? mockAccessToken : null;
};

// Mock service functions
export const storeUserCredential = jest.fn(async (user: User, accessToken: string) => {
  currentUser = user;
  currentToken = accessToken;
  isLoggedIn = true;
  return Promise.resolve();
});

export const getStoredUser = jest.fn(async () => {
  return Promise.resolve(currentUser);
});

export const getStoredAccessToken = jest.fn(async () => {
  return Promise.resolve(currentToken);
});

export const clearUserCredential = jest.fn(async () => {
  currentUser = null;
  currentToken = null;
  isLoggedIn = false;
  return Promise.resolve();
});