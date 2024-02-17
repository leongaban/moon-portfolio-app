import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  corePlugins: {
    // due to https://github.com/tailwindlabs/tailwindcss/issues/6602 - buttons disappear
    preflight: false,
  },
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      brown: '#261C15',
      yellow: '#EEE0CB',
      green: '#4E6E58',
      pink: '#E56399',
      red: '#D10000',
      white: '#fff',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
        '4xl': '10rem',
      },
    },
    fontFamily: {
      sans: ['Space_Grotesk', 'Poppins'],
      serif: ['Noto_Serif'],
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '2.5': '2.5rem',
      '5xl': '3.052rem',
    },
    extend: {},
  },
  plugins: [],
};
export default config;
