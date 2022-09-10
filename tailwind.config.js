module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing-page': "url('../public/landingPage.jpg')",
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
