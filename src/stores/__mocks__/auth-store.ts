let mockUser: unknown = undefined;
const mockSetUser = jest.fn((user) => mockUser = user);
const mockUnsetUser = jest.fn(() => mockUser = undefined);

const mockGetState = jest.fn(() => ({
  user: mockUser,
  setUser: mockSetUser,
  unsetUser: mockUnsetUser,
}));

const useAuthStore = jest.fn(() => ({
  user: mockUser,
  setUser: mockSetUser,
  unsetUser: mockUnsetUser,
})) as jest.Mock & {
    getState: jest.Mock;
  };;

useAuthStore.getState = mockGetState;

// Export the mock functions for direct access in tests
export const mockFunctions = {
  setUser: mockSetUser,
  unsetUser: mockUnsetUser,
  getState: mockGetState
};

export default useAuthStore;