const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const paths = require("../paths");

exports.shared = [
  new MiniCssExtractPlugin({
    filename:
      process.env.NODE_ENV === "development"
        ? "[name].css"
        : "[name].[contenthash].css",
    chunkFilename:
      process.env.NODE_ENV === "development"
        ? "[id].css"
        : "[id].[contenthash].css"
  }),
  new webpack.DefinePlugin({
    "process.env.TMDB_APIKEY": JSON.stringify(process.env.TMDB_APIKEY)
  })
];

exports.client = [
  new CleanWebpackPlugin(),
  process.env.NODE_ENV == "development" &&
    new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    template: path.join(paths.CSR_SRC, "index.html"),
    filename: "index.html",
    alwaysWriteToDisk: true
  }),
  new webpack.DefinePlugin({
    "process.env.IS_ONLY_CSR": JSON.stringify(process.env.IS_ONLY_CSR),
    "process.env.I18N_URL": JSON.stringify(process.env.I18N_URL)
  }),
  new LoadablePlugin({
    filename: "stats.json",
    writeToDisk: true
  })
].filter(Boolean);

exports.server = [new CleanWebpackPlugin()];
