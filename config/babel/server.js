module.exports = {
  ignore: [/node_modules\/core-js/],
  sourceType: "unambiguous",
  presets: ["@babel/preset-react"],
  plugins: [
    "@loadable/babel-plugin",
    ["babel-plugin-styled-components", { ssr: true }],
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    "@babel/plugin-transform-runtime"
  ]
};
