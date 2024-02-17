// ? User routes layout template
'use client';

import { FC, ReactNode, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
// import useAuth from '@/src/common/hooks/useAuth';

import { MOON_PORTFOLIO } from '@/src/common/constants/copy';
import Loading from '@/src/components/loading';
import { containsPrivacy } from '@/src/common/utils/formatters';
// import Alert from '@/src/components/alert'; // TODO handle auth alerts

interface layoutProps {
  children: ReactNode;
}

const Layout: FC<layoutProps> = ({ children }) => {
  // const { isAuthenticated, loading } = useAuth();
  const router = useRouter();
  const pathName = usePathname();
  const isPrivacy = containsPrivacy(pathName);
  const containerClass = isPrivacy ? '' : 'lg:max-w-[360px] max-w-[400px]';

  // useEffect(() => {
  //   if (isAuthenticated && !loading) router.push('/');
  // }, [isAuthenticated, loading]);

  // if (loading || isAuthenticated) {
  //   return (
  //     <main className="flex flex-col items-center justify-between p-10">
  //       <Loading />
  //     </main>
  //   );
  // }

  return (
    <main className="flex flex-col items-center justify-between p-10">
      {/* <Alert type={'error'} msg={'Some seriously bad happened.'} /> */}
      <div className={containerClass}>
        <div>
          <h1 className="logo-text brightness-150 lg:text-5xl text-4xl">
            <Link href="/">{MOON_PORTFOLIO}</Link>
          </h1>
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
