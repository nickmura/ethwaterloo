const config = {
  content: ['./src/**/*.{html,js,svelte,ts}',"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",],

  theme: {
    extend: {
      fontFamily: {
        serif: ['Open Sans', 'sans-serif'],
        mono: ['interstate-mono', 'monospace']
      }
    }
  },

  plugins: [
    require('flowbite/plugin')
  ],
};

module.exports = config;
