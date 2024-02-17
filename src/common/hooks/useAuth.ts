import { useEffect, useState } from 'react';
import { getTokenFromLocalCookie } from '../lib/auth';

const useToken = () => {
  const [token, setToken] = useState<string | undefined | null>(null);

  useEffect(() => {
    setToken(getTokenFromLocalCookie());
  }, []);

  return {
    loading: token === null,
    isAuthenticated: !!token,
  };
};

export default useToken;
