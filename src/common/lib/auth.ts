import Router from 'next/router';
import Cookies from 'js-cookie';
import { fetcher } from './api';

interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
}

interface TokenData {
  user: User;
  jwt: string;
}

interface GoogleTokenData {
  user: User;
  token: string;
}

export const setToken = (data: TokenData) => {
  if (typeof window === 'undefined') {
    return;
  }
  Cookies.set('id', `${data.user.id}`);
  Cookies.set('username', data.user.username);
  Cookies.set('token', data.jwt);
};

export const setGoogleToken = (data: GoogleTokenData) => {
  if (typeof window === 'undefined') {
    return;
  }
  Cookies.set('id', `${data.user.id}`);
  Cookies.set('username', data.user.username);
  Cookies.set('token', data.token);
};

export const unsetToken = () => {
  if (typeof window === 'undefined') {
    return;
  }
  Cookies.remove('id');
  Cookies.remove('token');
  Cookies.remove('username');
};

export const getUserFromLocalCookie = () => {
  const jwt = getTokenFromLocalCookie();
  if (jwt) {
    return fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then(data => {
        return data.username;
      })
      .catch(error => console.error(error));
  } else {
    return;
  }
};

export const getIdFromLocalCookie = () => {
  const jwt = getTokenFromLocalCookie();
  if (jwt) {
    return fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    }).then(data => {
      return data.id;
    });
  } else {
    return;
  }
};

export const getTokenFromLocalCookie = () => {
  return Cookies.get('token');
};

export const getTokenFromServerCookie = (req: any) => {
  if (!req.headers.cookie || '') {
    return undefined;
  }
  const jwtCookie = req.headers.cookie
    .split(';')
    .find((c: string) => c.trim().startsWith('jwt='));
  if (!jwtCookie) {
    return undefined;
  }
  const jwt = jwtCookie.split('=')[1];
  return jwt;
};

export const getIdFromServerCookie = (req: any) => {
  if (!req.headers.cookie || '') {
    return undefined;
  }
  const idCookie = req.headers.cookie
    .split(';')
    .find((c: string) => c.trim().startsWith('id='));
  if (!idCookie) {
    return undefined;
  }
  const id = idCookie.split('=')[1];
  return id;
};
