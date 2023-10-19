import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      extend: {
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'dark-blue-splinter': '#0E0122',
          'light-blue-splinter': '#120036',
          'light-pink-splinter': '#fa98ff',
          black: "#000000",
      white: "#ffffff",
      grey: "#999999",
      "grey-light": "#6D87AC",
      "grey-lightest": "#DFE8F9",
      "purple-darkest": "#19102d",
      "purple-dark": "#28133f",
      "purple-text": "#13173E",
      purple: "#34184B",
      "purple-light": "#482168",
      "purple-lightest": "#983bf6",

        },
      fontFamily: {
          clashDisplay: ['var(--font-clashDisplay)']
        }
    
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    
  },
  plugins: [require("daisyui")],
}
export default config

