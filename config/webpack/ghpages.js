const path = require("path");

const paths = require("../paths");
const resolvers = require("./resolvers");
const loaders = require("./loaders");
const plugins = require("./plugins");

module.exports = {
  mode: process.env.NODE_ENV,
  name: "client",
  target: "web",
  devtool: "cheap-source-map",
  entry: [path.resolve(paths.GHPAGES_SRC, "index.js")],
  externals: {
    "fs-extra": false
  },
  output: {
    path: paths.GHPAGES_DIST,
    filename: "[name].js",
    chunkFilename: "[name].[chunkhash:8].chunk.js",
    publicPath: process.env.PUBLIC_PATH
  },
  plugins: [...plugins.shared, ...plugins.ghpages],
  resolve: resolvers,
  module: {
    rules: loaders.client
  },
  node: {
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty"
  },
  stats: {
    cached: false,
    cachedAssets: false,
    chunks: false,
    chunkModules: false,
    children: false,
    colors: true,
    hash: false,
    modules: false,
    reasons: false,
    timings: true,
    version: false
  }
};
