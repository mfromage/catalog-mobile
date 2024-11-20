const mockSetUser = jest.fn();
const mockUnsetUser = jest.fn();

const useAuthStore = jest.fn(() => ({
  setUser: mockSetUser,
  unsetUser: mockUnsetUser,
})) as jest.Mock & {
    getState: jest.Mock;
  };

useAuthStore.getState = jest.fn(() => ({
  setUser: mockSetUser,
  unsetUser: mockUnsetUser,
}));

export default useAuthStore;