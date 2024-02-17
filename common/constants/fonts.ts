import { Fragment_Mono, Space_Grotesk } from 'next/font/google';

const space_grotesk_700 = Space_Grotesk({ weight: '700', subsets: ['latin'] });

const fragment_mono_400 = Fragment_Mono({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

export const fragmentMono400 = fragment_mono_400.className;

export const spaceGortesk700 = space_grotesk_700.className;
