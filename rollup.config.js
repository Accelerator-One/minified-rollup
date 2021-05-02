export default {
  input: "./development/index.js",
  output: {
    file: "./production/index.js",
    format: "iife"
  },
  watch: {
    buildDelay: 4000
  }
};