export default {
  input: "./development/index.js",
  output: {
    file: "./production/index.js",
    format: "iife",
    compact: true,
    validate: true,
    minifyInternalExports: true
  },
  watch: {
    buildDelay: 4000
  }
};
