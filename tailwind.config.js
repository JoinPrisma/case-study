const { tailwindConfig } = require("@joinprisma/components");

module.exports = {
  ...tailwindConfig,
  content: ["src/**/*", "./node_modules/@joinprisma/components/lib/index.js"],
};
