import * as SecureStore from 'expo-secure-store';

export const storeAccessToken = async (key: string, accessToken: string) => {
  await SecureStore.setItemAsync(key, accessToken);
};

export const getAccessToken = async (key: string): Promise<string | null> => {
  return await SecureStore.getItemAsync(key);
};

export const resetAccessToken = async (key: string) => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.error('Failed to reset access token', error);
  }
};
