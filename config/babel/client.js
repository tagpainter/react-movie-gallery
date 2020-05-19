module.exports = {
  ignore: [/node_modules\/core-js/],
  sourceType: "unambiguous",
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: { version: 3 },
        shippedProposals: true,
        targets: { ie: 9 },
        loose: true
      }
    ],
    "@babel/preset-react"
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["babel-plugin-styled-components", { ssr: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    "@babel/plugin-transform-runtime",
    "@loadable/babel-plugin"
  ]
};
