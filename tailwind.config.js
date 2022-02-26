module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          accent: 'var(--accent)',
          accentDark: 'var(--accentDark)',
          darkGray: 'var(--primary-darkGray)',
          textColor: 'var(--primary-text)',
        },
      },
      fontFamily: {
        main: 'var(--font-theme)',
        custom1: 'Poppins',
        custom2: 'Lobster',
        custom3: 'Roboto Mono',
      },
    },
  },
  plugins: [],
};
