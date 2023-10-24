const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "@rai/design-system",
  "@rai/utils",
]);

/**
 * @type {import('next').NextConfig}
*/
module.exports = withPlugins([withTM], {
  trailingSlash: true,
});
