/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
  safelist: ['text-cyan-500', 'text-emerald-500', 'text-lime-500', 'text-lime-700', 'text-indigo-500', 'text-orange-600', 'text-rose-600', 'text-sky-500', 'text-purple-600', 'text-violet-500']
}