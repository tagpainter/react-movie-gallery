require("../config/register");
const path = require("path");
const express = require("express");
const paths = require("../config/paths");

async function main() {
  const app = express();

  app.use("/lang", express.static(paths.I18N_DIR));

  if (process.env.NODE_ENV == "development") {
    const webpack = require("webpack");
    const webpackDevMiddleware = require("webpack-dev-middleware");
    const webpackHotMiddleware = require("webpack-hot-middleware");
    const { promisifyCompiler } = require("./utils");

    const clientConfig = require("../config/webpack/client");
    clientConfig.entry = [
      `webpack-hot-middleware/client?path=/__webpack_hmr&reload=true`,
      ...clientConfig.entry
    ];

    const clientCompiler = webpack(clientConfig);
    const clientPromise = promisifyCompiler("client", clientCompiler);

    const watchOptions = {
      ignored: /node_modules/,
      stats: clientConfig.stats
    };

    app.use(
      webpackDevMiddleware(clientCompiler, {
        publicPath: clientConfig.output.publicPath,
        stats: clientConfig.stats,
        watchOptions,
        inline: false
      })
    );

    app.use(webpackHotMiddleware(clientCompiler));

    try {
      await clientPromise;
      console.log("Build is done!");
    } catch (error) {
      console.error(error);
    }

    // Serve index.html
    app.use("*", (req, res, next) => {
      const filename = path.join(paths.CSR_DIST, "index.html");
      let html = clientCompiler.outputFileSystem.readFileSync(filename);
      res.set("Content-type", "text/html");
      res.send(html).end();
    });
  } else {
    const historyApiFallback = require("express-history-api-fallback");

    app.use(paths.PUBLIC_PATH, express.static(paths.CSR_DIST));

    app.use(historyApiFallback(path.resolve(paths.CSR_DIST, "index.html")));
  }

  app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${process.env.PORT}`);
  });
}
main();
