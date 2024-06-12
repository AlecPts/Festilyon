const config = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

  plugins: [require('flowbite/plugin')],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          '50': '#fdf4ff',
          '100': '#fae9fe',
          '200': '#f4d2fc',
          '300': '#efaef9',
          '400': '#e67df5',
          '500': '#d853ea',
          '600': '#bd2ccd',
          '700': '#a021aa',
          '800': '#841d8b',
          '900': '#6e1d72',
          '950': '#49074b',
        }
      }
    }
  }
};

module.exports = config;