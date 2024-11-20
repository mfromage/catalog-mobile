import { useEffect, useState } from 'react';
import { getStoredUser } from '@/services/user-service';
import useAuthStore from '@/stores/auth-store';

const useInitialization = () => {
  const [hasInitialized, setInitialized] = useState(false);
  const { setUser } = useAuthStore();

  useEffect(() => {
    const initialSetUser = async () => {
      const user = await getStoredUser();
      if (user) setUser(user);
      setInitialized(true);
    };
    initialSetUser();
  }, []);

  return { hasInitialized };
};

export default useInitialization;
