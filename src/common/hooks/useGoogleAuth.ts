import { useState } from 'react';

import axios from 'axios';

const useGoogleAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const login = async () => {
    setLoading(true);

    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/strapi-google-auth/init`
      );

      window.location.href = data?.url;
    } catch (error) {
      setError('Something went wrong');
    }

    setLoading(false);
  };

  return {
    loading: loading,
    login,
    error,
  };
};

export default useGoogleAuth;
