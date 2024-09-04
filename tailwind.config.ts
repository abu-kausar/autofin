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
        'gray-900': 'var(--Gray-900)',
        'gray-200': 'var(--Gray-200)',
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
