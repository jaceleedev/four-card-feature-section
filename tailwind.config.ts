import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red: '#EA5454',
        cyan: '#44D3D2',
        orange: '#FCAE4A',
        blue: '#549EF2',
        charcoal: '#4D4F62',
        offWhite: '#FAFAFA',
      },
      screens: {
        desktop: '375px',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
};
export default config;
