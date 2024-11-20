import { create } from 'zustand';
import { User } from '@/types/user.types';

interface AuthState {
  user?: User;
  setUser: (user: User) => void;
  unsetUser: () => void;
}

const useAuthStore = create<AuthState>(set => ({
  user: undefined,
  setUser: async user => {
    set({ user });
  },
  unsetUser: async () => {
    set({ user: undefined });
  },
}));

export default useAuthStore;
