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
    const chokidar = require("chokidar");

    const clientConfig = require("../config/webpack/client");
    const serverConfig = require("../config/webpack/server");
    clientConfig.entry = [
      `webpack-hot-middleware/client?path=/__webpack_hmr&reload=true`,
      ...clientConfig.entry
    ];

    const clientCompiler = webpack(clientConfig);
    const serverCompiler = webpack(serverConfig);
    const clientPromise = promisifyCompiler("client", clientCompiler);
    const serverPromise = promisifyCompiler("server", serverCompiler);

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

    // Compile server
    serverCompiler.watch(watchOptions, (error, stats) => {
      if (!error && !stats.hasErrors()) {
        console.log(stats.toString(serverConfig.stats));
        return;
      }
      if (error) console.error(error);
      if (stats.hasErrors()) {
        const info = stats.toJson();
        const errors = info.errors[0].split("\n");
        console.error(errors[0]);
        console.error(errors[1]);
        console.error(errors[2]);
      }
    });

    try {
      await clientPromise;
      await serverPromise;
      console.log("Build is done!");
    } catch (error) {
      console.error(error);
    }

    app.use((req, res, next) => {
      return require("../dist/ssr").default({
        statsFile: path.resolve(paths.CSR_DIST, "stats.json")
      })(req, res, next);
    });

    // Watch ssr source changings
    const serverWatcher = chokidar.watch(paths.SSR_DIST_REL, {
      cwd: paths.PROJECT_ROOT
    });

    serverWatcher.on("ready", function() {
      serverWatcher.on("all", function() {
        console.log("Clearing /ssr/ module cache from server");
        Object.keys(require.cache).forEach(function(id) {
          if (/[\/\\]ssr[\/\\]/.test(id)) delete require.cache[id];
        });
      });
    });
  } else {
    app.use(process.env.PUBLIC_PATH, express.static(paths.CSR_DIST));

    app.use(
      require("../dist/ssr").default({
        statsFile: path.resolve(paths.CSR_DIST, "stats.json")
      })
    );
  }

  app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${process.env.PORT}`);
  });
}
main();
