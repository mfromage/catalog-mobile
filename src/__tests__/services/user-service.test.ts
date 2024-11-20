import * as SecureStore from 'expo-secure-store';
import useAuthStore from '@/stores/auth-store';
import { storeUserCredential, getStoredUser, getStoredAccessToken, clearUserCredential } from '@/services/user-service';

// Mock dependencies
jest.mock('expo-secure-store');
jest.mock('@/stores/auth-store');

describe('User Service', () => {
  // Mock user data
  const mockUser = {
    id: '1',
    email: 'test@example.com',
    name: 'Test User'
  };
  const mockAccessToken = 'mock-access-token';

  // Mock store functions
  const mockSetUser = jest.fn();
  const mockUnsetUser = jest.fn();

  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
    
    // Setup auth store mock
    (useAuthStore.getState as jest.Mock).mockReturnValue({
      setUser: mockSetUser,
      unsetUser: mockUnsetUser
    });
  });

  describe('storeUserCredential', () => {
    it('should store user and access token', async () => {
      await storeUserCredential(mockUser, mockAccessToken);

      expect(mockSetUser).toHaveBeenCalledWith(mockUser);
      expect(SecureStore.setItemAsync).toHaveBeenCalledWith('default-user', JSON.stringify(mockUser));
      expect(SecureStore.setItemAsync).toHaveBeenCalledWith('default-access-token', mockAccessToken);
    });
  });

  describe('getStoredUser', () => {
    it('should return user when stored', async () => {
      (SecureStore.getItemAsync as jest.Mock).mockResolvedValueOnce(JSON.stringify(mockUser));

      const result = await getStoredUser();

      expect(result).toEqual(mockUser);
      expect(SecureStore.getItemAsync).toHaveBeenCalledWith('default-user');
    });

    it('should return null when no user stored', async () => {
      (SecureStore.getItemAsync as jest.Mock).mockResolvedValueOnce(null);

      const result = await getStoredUser();

      expect(result).toBeNull();
    });
  });

  describe('getStoredAccessToken', () => {
    it('should return access token when stored', async () => {
      (SecureStore.getItemAsync as jest.Mock).mockResolvedValueOnce(mockAccessToken);

      const result = await getStoredAccessToken();

      expect(result).toBe(mockAccessToken);
      expect(SecureStore.getItemAsync).toHaveBeenCalledWith('default-access-token');
    });

    it('should return null when no token stored', async () => {
      (SecureStore.getItemAsync as jest.Mock).mockResolvedValueOnce(null);

      const result = await getStoredAccessToken();

      expect(result).toBeNull();
    });
  });

  describe('clearUserCredential', () => {
    it('should clear user and access token', async () => {
      await clearUserCredential();

      expect(SecureStore.deleteItemAsync).toHaveBeenCalledWith('default-user');
      expect(SecureStore.deleteItemAsync).toHaveBeenCalledWith('default-access-token');
      expect(mockUnsetUser).toHaveBeenCalled();
    });

    it('should handle errors', async () => {
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
      const error = new Error('Test error');
      (SecureStore.deleteItemAsync as jest.Mock).mockRejectedValueOnce(error);

      await clearUserCredential();

      expect(consoleErrorSpy).toHaveBeenCalledWith('Failed to reset access token', error);
      consoleErrorSpy.mockRestore();
    });
  });
});
