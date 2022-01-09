module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media',
  theme: {
    screens: {
      '2sm': '375px',
      // iphone => @media (min-width: 375px) { ... }

      sm: '640px',
      // tablet => @media (min-width: 640px) { ... }

      md: '768px',
      // ipad => @media (min-width: 768px) { ... }

      lg: '1024px',
      // laptop => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // desktop => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // desktop => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
