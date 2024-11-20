import { act } from '@testing-library/react-native'
import useAuthStore from '@/stores/auth-store'

jest.mock('@/stores/auth-store');

const mockUser = { id: "test-id-1", name: "test-name-1", email: 'test@example.com' }

describe('AuthStore', () => {
  beforeEach(() => {
    act(() => {
      useAuthStore.getState().unsetUser()
    })
  })

  it('should have default values', () => {
    const state = useAuthStore.getState()    
    expect(state.user).toBeUndefined()
  })

  it('should set user', () => {
    useAuthStore.getState().setUser(mockUser);
    expect(useAuthStore.getState().user).toEqual(mockUser);
  });

  it('should unset user', () => {
    
    // First set the user
    useAuthStore.getState().setUser(mockUser);
    expect(useAuthStore.getState().user).toEqual(mockUser);
    
    // Then unset it
    useAuthStore.getState().unsetUser();
    expect(useAuthStore.getState().user).toBeUndefined();
  });
})
