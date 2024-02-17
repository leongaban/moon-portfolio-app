'use client';

import { useEffect } from 'react';

// import Hotjar from '@hotjar/browser';

export default function Template({ children }: { children: React.ReactNode }) {
  // useEffect(() => {
  //   const siteId = 3694573;
  //   const hotjarVersion = 6;
  //   Hotjar.init(siteId, hotjarVersion);
  // }, []);

  return children;
}
