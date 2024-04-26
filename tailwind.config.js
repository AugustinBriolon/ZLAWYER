/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        'light-blue': '#F1F5F9',
        blue: '#CBD5E1',
        'dark-blue': '#5E6A7B',
        'midnight-blue': '#222E3E',
        orange: '#ED630F',
        black: '#0A0A0A',
      },
    },
    borderRadius: {
      'radius-current': '15px',
    },
    maxWidth: {
      'max-width-screen': '1920px',
    },
    animation: {
      "infinite-slider": "infiniteSlider 30s linear infinite",
      "infinite-slider-reverse": "infiniteSlider 30s linear infinite reverse"
    },
    keyframes: {
      infiniteSlider: {
        "0%": { transform: "translateX(0)" },
        "100%": {
          transform: "translateX(-100%)",
        },
      },
    },
  },
  plugins: [],
};
