import { getStoredUser } from '@/services/user-service';
import useAuthStore from '@/stores/auth-store';
import { useEffect, useState } from 'react';

const useInitialization = () => {
  const [hasInitialized, setInitialized] = useState(false);
  const { setUser } = useAuthStore();

  useEffect(() => {
    const initialSetUser = async () => {
      const user = await getStoredUser();
      user && setUser(user);
    };
    initialSetUser().then(() => {
      setInitialized(true);
    });
  }, []);

  return { hasInitialized };
};

export default useInitialization;
