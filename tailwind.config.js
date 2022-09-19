const { tailwindConfig } = require('@joinprisma/components');

module.exports = {
  ...tailwindConfig,
  content: [
    './components/**/*',
    './pages/**/*',
    './node_modules/@joinprisma/components/lib/index.js',
  ],
};
