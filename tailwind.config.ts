import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        bgColor: '#F3F2FD',
        bgBlack: '#12141D',
        primaryTextColor: '#1C1C1C',
        'gray-50': 'var(--Gray-50)',
        'gray-100': 'var(--Gray-100)',
        'gray-200': 'var(--Gray-200)',
        'gray-600': 'var(--Gray-600)',
        'gray-700': 'var(--Gray-700)',
        'gray-900': 'var(--Gray-900)',
        'success-50': 'var(--Success-50)',
        'success-700': 'var(--Success-700)',
      },
      backgroundImage: {
        whiteGradient: 'linear-gradient(2deg, #CCA8FB 1.75%, #FFF 74.86%)',
        purpleGradient: 'var(--GR)',
      },
    },
  },
  plugins: [],
};
export default config;
