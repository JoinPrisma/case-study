const { tailwindConfig } = require('@joinprisma/components');

module.exports = {
  ...tailwindConfig,
  theme: {
    ...tailwindConfig.theme,
    extend: {
      ...tailwindConfig.theme.extend,
      keyframes: {
        ...tailwindConfig.theme.keyframes,
        'reverse-spin': { from: { transform: 'rotate(360deg)' } },
      },
    },
  },
  content: [
    './components/**/*',
    './pages/**/*',
    './node_modules/@joinprisma/components/lib/index.js',
  ],
};
