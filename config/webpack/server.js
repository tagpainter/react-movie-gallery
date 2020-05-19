const path = require("path");
const nodeExternals = require("webpack-node-externals");

const paths = require("../paths");
const resolvers = require("./resolvers");
const loaders = require("./loaders");
const plugins = require("./plugins");

module.exports = {
  mode: process.env.NODE_ENV,
  name: "server",
  target: "node",
  entry: [path.resolve(paths.SSR_SRC, "index.js")],
  externals: [
    nodeExternals({
      whitelist: /\.css$/
    })
  ],
  output: {
    path: paths.SSR_DIST,
    filename: "index.js",
    publicPath: paths.PUBLIC_PATH,
    libraryTarget: "commonjs2"
  },
  resolve: resolvers,
  module: {
    rules: loaders.server
  },
  plugins: [...plugins.shared, ...plugins.server],
  stats: {
    assets: false,
    cached: false,
    cachedAssets: false,
    chunks: false,
    chunkModules: false,
    children: false,
    colors: true,
    hash: false,
    modules: false,
    performance: false,
    reasons: false,
    timings: true,
    version: false
  },
  node: {
    __dirname: false
  }
};
