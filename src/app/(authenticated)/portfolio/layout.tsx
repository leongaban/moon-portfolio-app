'use client';
import { FC, ReactNode } from 'react';

interface layoutProps {
  children: ReactNode;
}

const Layout: FC<layoutProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default Layout;
