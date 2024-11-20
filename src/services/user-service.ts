import useAuthStore from '@/stores/auth-store';
import { User } from '@/types/user.types';
import * as SecureStore from 'expo-secure-store';

const userKey = 'default-user';
const accessTokenKey = 'default-access-token';

export const storeUserCredential = async (user: User, accessToken: string) => {
  const { setUser } = useAuthStore.getState();
  setUser(user);

  const userString = JSON.stringify(user);

  await SecureStore.setItemAsync(userKey, userString);
  await SecureStore.setItemAsync(accessTokenKey, accessToken);
};

export const getStoredUser = async (): Promise<User | null> => {
  const userString = await SecureStore.getItemAsync(userKey);
  return userString === null ? null : (JSON.parse(userString) as User);
};

export const getStoredAccessToken = async (): Promise<string | null> => {
  const accessToken = await SecureStore.getItemAsync(accessTokenKey);
  return accessToken;
};

export const clearUserCredential = async () => {
  try {
    await SecureStore.deleteItemAsync(userKey);
    await SecureStore.deleteItemAsync(accessTokenKey);

    const { unsetUser } = useAuthStore.getState();
    unsetUser();
  } catch (error) {
    console.error('Failed to reset access token', error);
  }
};
