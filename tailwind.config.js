/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // Force Just-in-Time mode
  content: [
    "./*.{html,js}",
    "./pages/**/*.{html,js}",
    "./scripts/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },

  safelist: [
    ...Array.from({ length: 101 }, (_, i) => `ml-${i}`),
    ...Array.from({ length: 101 }, (_, i) => `mr-${i}`),
    ...Array.from({ length: 101 }, (_, i) => `mt-${i}`),
    ...Array.from({ length: 101 }, (_, i) => `mb-${i}`),
    ...Array.from({ length: 101 }, (_, i) => `py-${i}`),
    ...Array.from({ length: 101 }, (_, i) => `px-${i}`),
    ...Array.from({ length: 101 }, (_, i) => `h-${i}`),
    ...Array.from({ length: 101 }, (_, i) => `w-${i}`),
  ],

  plugins: [],
};
