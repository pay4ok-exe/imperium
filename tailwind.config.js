/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#D2691E',
            light: '#E6A06B',
            dark: '#A05214',
          },
          secondary: {
            DEFAULT: '#6B8E23',
            light: '#9BB25E',
            dark: '#465F17',
          },
          neutral: {
            50: '#F9F7F5',
            100: '#F1EDE8',
            200: '#E4DAD0',
            300: '#D4C5B9',
            400: '#C3B0A1',
            500: '#B39B89',
            600: '#8F7C6D',
            700: '#6B5D52',
            800: '#483E36',
            900: '#241F1B',
          }
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
          serif: ['Playfair Display', 'Georgia', 'serif'],
          display: ['Playfair Display', 'serif'],
        },
        boxShadow: {
          'card': '0 4px 16px rgba(0, 0, 0, 0.08)',
          'product': '0 10px 30px rgba(0, 0, 0, 0.1)',
          'btn': '0 4px 10px rgba(210, 105, 30, 0.2)',
          'hover': '0 10px 25px rgba(210, 105, 30, 0.25)',
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'texture': "url('/texture.png')",
        },
        animation: {
          'float': 'float 3s ease-in-out infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          }
        },
      },
    },
    plugins: [],
  }