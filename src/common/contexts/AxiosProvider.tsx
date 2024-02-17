import { ReactElement, ReactNode, useEffect, useState } from 'react';
import axios, { InternalAxiosRequestConfig } from 'axios';
import { STATUS_CODE } from '@/src/common/constants/status-codes';
import { AxiosContext } from './AxiosContext';
import { getTokenFromLocalCookie, unsetToken } from '../lib/auth';

const axiosInstance = axios.create();

interface PropsWithChildren {
  children: ReactNode | ReactElement;
}

export const AxiosProvider = ({ children }: PropsWithChildren) => {
  const [responseInterceptorId, setResponseInterceptorId] = useState<
    number | null
  >(null);
  const [requestInterceptorId, setRequestInterceptorId] = useState<
    number | null
  >(null);

  useEffect(() => {
    if (responseInterceptorId)
      axiosInstance.interceptors.response.eject(responseInterceptorId);
    if (requestInterceptorId)
      axiosInstance.interceptors.request.eject(requestInterceptorId);

    setResponseInterceptorId(
      axiosInstance.interceptors.response.use(
        res => res,
        responseErrorInterceptor
      )
    );
    setRequestInterceptorId(
      axiosInstance.interceptors.request.use(
        requestInterceptor,
        handleRejectedConfig
      )
    );
  }, []);

  const requestInterceptor = async (config: InternalAxiosRequestConfig) => {
    let bearerToken = '';

    try {
      bearerToken = getTokenFromLocalCookie() ?? '';
    } catch (e) {
      console.log(e);
    }

    config.baseURL = 'http://localhost:1337';
    config.headers.Authorization = `Bearer ${bearerToken}`;
    return config;
  };

  const responseErrorInterceptor = ({ response }: { response: any }) => {
    try {
      if (response && !response?.status) {
        Promise.reject(response);
      }
      switch (response?.status) {
        case STATUS_CODE.UNAUTHORIZED:
          unsetToken();
          break;
        case STATUS_CODE.UNPROCESSABLE_ENTITY:
          console.error(
            (response.data && response.data.message) ||
              (response.data && response.data.code)
          );
          break;
        default:
          console.error(
            (response.data && response.data.message) ||
              (response.data && response.data.code)
          );
          break;
      }
    } catch (error) {
      console.error(error);
    }

    return Promise.reject(response);
  };

  const handleRejectedConfig = (error: any) => {
    console.error({ rejectConfig: error });
    Promise.reject(error);
  };

  return (
    <AxiosContext.Provider value={{ axiosInstance }}>
      {children}
    </AxiosContext.Provider>
  );
};
