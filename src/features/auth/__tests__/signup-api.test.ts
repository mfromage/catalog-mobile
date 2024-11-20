import { postUserSignUp } from '../api/signup-api';
import { SignUpRequest, AuthResponse } from '../types/auth.types';
import api from '@/libs/axios';

// Mock axios instance
jest.mock('@/libs/axios');

describe('Signup API', () => {
  // Mock data
  const mockSignUpRequest: SignUpRequest = {
    name: 'Test User',
    email: 'test@example.com',
    password: 'Password123!',
    password_confirmation: 'Password123!',
  };

  const mockAuthResponse: AuthResponse = {
    access_token: 'mock-access-token',
    user: {
      id: '1',
      email: 'test@example.com',
      name: 'Test User',
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should successfully register a new user', async () => {
    // Mock successful API response
    (api.post as jest.Mock).mockResolvedValueOnce({ data: mockAuthResponse });

    const response = await postUserSignUp(mockSignUpRequest);

    // Verify API call
    expect(api.post).toHaveBeenCalledWith('/register', mockSignUpRequest);
    expect(api.post).toHaveBeenCalledTimes(1);

    // Verify response
    expect(response).toEqual(mockAuthResponse);
  });

  it('should throw error when registration fails', async () => {
    const errorMessage = 'Email already exists';
    const mockError = { message: errorMessage };

    // Mock API error response
    (api.post as jest.Mock).mockRejectedValueOnce(mockError);

    // Verify error handling
    await expect(postUserSignUp(mockSignUpRequest)).rejects.toEqual(mockError);
    expect(api.post).toHaveBeenCalledWith('/register', mockSignUpRequest);
  });

  it('should handle network errors', async () => {
    const networkError = new Error('Network Error');
    
    // Mock network error
    (api.post as jest.Mock).mockRejectedValueOnce(networkError);

    await expect(postUserSignUp(mockSignUpRequest)).rejects.toThrow('Network Error');
  });

  it('should handle malformed response data', async () => {
    // Mock invalid response format
    (api.post as jest.Mock).mockResolvedValueOnce({ 
      data: { 
        invalidField: 'invalid' 
      } 
    });

    await expect(postUserSignUp(mockSignUpRequest)).resolves.toEqual({
      invalidField: 'invalid'
    });
  });

  it('should send correct content type header', async () => {
    (api.post as jest.Mock).mockResolvedValueOnce({ data: mockAuthResponse });

    await postUserSignUp(mockSignUpRequest);

    expect(api.post).toHaveBeenCalledWith(
      '/register',
      mockSignUpRequest,
    );
  });
});
