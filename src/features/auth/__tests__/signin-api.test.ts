import { postUserSignIn } from '../api/signin-api';
import api from '@/libs/axios';
import { SignInRequest } from '../types/auth.types';

// Mock the axios instance
jest.mock('@/libs/axios');
const mockedApi = api as jest.Mocked<typeof api>;

describe('signin-api', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('postUserSignIn', () => {
    const mockRequest: SignInRequest = {
      email: 'test@example.com',
      password: 'password123',
    };

    const mockResponse = {
      data: {
        access_token: 'mock-token-123',
        user: {
          id: 1,
          email: 'test@example.com',
          name: 'Test User',
        },
      },
    };

    it('should successfully sign in user and return token and user data', async () => {
      // Arrange
      mockedApi.post.mockResolvedValueOnce(mockResponse);

      // Act
      const result = await postUserSignIn(mockRequest);

      // Assert
      expect(mockedApi.post).toHaveBeenCalledWith('/login', mockRequest);
      expect(result).toEqual(mockResponse.data);
    });

    it('should throw an error when API call fails', async () => {
      // Arrange
      const errorMessage = 'Invalid credentials';
      mockedApi.post.mockRejectedValueOnce(new Error(errorMessage));

      // Act & Assert
      await expect(postUserSignIn(mockRequest)).rejects.toThrow(errorMessage);
      expect(mockedApi.post).toHaveBeenCalledWith('/login', mockRequest);
    });
  });
});
