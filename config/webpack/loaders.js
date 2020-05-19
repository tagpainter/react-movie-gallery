const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const marked = require("marked");

const stylesRegex = /\.(css|scss|sass)$/;
const markdownRegex = /\.md$/;

const stylesLoaderClient = {
  test: stylesRegex,
  use: [
    require.resolve("css-hot-loader"),
    MiniCssExtractPlugin.loader,
    require.resolve("css-loader"),
    {
      loader: require.resolve("postcss-loader"),
      options: { plugins: [require("autoprefixer")()] }
    },
    require.resolve("sass-loader")
  ]
};

const stylesLoaderServer = {
  test: stylesRegex,
  use: [
    MiniCssExtractPlugin.loader,
    require.resolve("css-loader"),
    {
      loader: require.resolve("postcss-loader"),
      options: { plugins: [require("autoprefixer")()] }
    },
    require.resolve("sass-loader")
  ]
};

const babelLoaderClient = {
  test: /\.(js|jsx|ts|tsx)$/,
  include: [
    /src/,
    /node_modules\/polished/,
    /node_modules\/scheduler/,
    /node_modules\/react/,
    // framer-motion
    /node_modules\/framer-motion/,
    /node_modules\/framesync/,
    /node_modules\/style-value-types/,
    /node_modules\/stylefire/
  ],
  use: {
    loader: "babel-loader",
    options: require("../babel/client.js")
  }
};

const babelLoaderServer = {
  test: /\.(js|jsx|ts|tsx)$/,
  include: [/src/],
  use: {
    loader: "babel-loader",
    options: require("../babel/server.js")
  }
};

const markdownLoader = {
  test: markdownRegex,
  use: [
    {
      loader: "html-loader"
    },
    {
      loader: "markdown-loader",
      options: {
        pedantic: true,
        renderer: new marked.Renderer()
      }
    }
  ]
};

const client = [
  {
    oneOf: [babelLoaderClient, stylesLoaderClient, markdownLoader]
  }
];

const server = [
  {
    oneOf: [babelLoaderServer, stylesLoaderServer, markdownLoader]
  }
];

module.exports = {
  client,
  server
};
