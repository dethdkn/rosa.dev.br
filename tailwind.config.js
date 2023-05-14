/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
  safelist: ['text-cyan-500', 'text-emerald-500', 'text-lime-500', 'text-lime-700', 'text-indigo-500', 'text-orange-600', 'text-rose-600', 'text-sky-500', 'text-purple-600', 'text-violet-500', 'text-red-700']
}