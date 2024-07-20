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
        text: {
          default: '#0F0F0F', // Default text color
          secondary: '#707070', // Secondary text color
          subdued: '#979999', // Subdued text color
          disabled: '#B1B2B2', // Disabled text color
          hovered: '#262626', // Hovered text color
        },
        background: {
          default: '#FAFAFA', // Default background color
          subdued: '#F0F1F2', // Subdued background color
          icon: '#C7C3C3', // Icon background color
        },
        surface: {
          // default: '#FFFFFF', // Default surface color
          subdued: '#F2F0F0', // Subdued surface color
          disabled: '#FAFAFA', // Disabled state of surface color
          icon: '#141414', // Default icon color
        },
      },
      fontFamily: {
        bricolage: 'var(--bricolage)',
        inconsolata: 'var(--inconsolata)',

      },
    },
  },
  plugins: [],
};
export default config;
