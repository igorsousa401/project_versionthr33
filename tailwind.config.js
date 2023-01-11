/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'home-pattern': "url('/public/images/background.png')",
        'clouds-pattern': "url('/public/images/background-clouds.png')",
        'artist': "url('/public/images/character-artist.png')",
        'achievement': "url('/public/images/character-downing.png')",
        'team': "url('/public/images/team-character.png')",
      }
    },
  },
  plugins: [],
};
