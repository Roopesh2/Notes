// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  exclude: [
    "**/node_modules",
    "**/*.rules",
    "**/*.json*",
    "**/*.config.mjs",
    "**/README.md",
    "**/.firebase/*"
  ],
  mount: {},
  plugins: [],
  packageOptions: {},
  devOptions: {},
  buildOptions: {},
  optimize: {
    sourcemap: false,
    bundle: true,
    minify: true,
  },
};
