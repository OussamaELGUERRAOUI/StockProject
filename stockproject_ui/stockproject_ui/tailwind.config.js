/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#002B5B',      // Bleu foncé corporate
        secondary: '#EA4335',    // Rouge vif (accent)
        dark: '#0F172A',
        light: '#F8FAFC',
      },
      fontFamily: {
        heading: ['"Oswald"', 'sans-serif'],
        sans: ['"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        hero: '3rem',             // 48px
      },
      boxShadow: {
        card: '0 4px 14px rgba(0,0,0,0.1)',
      },
      borderRadius: {
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
