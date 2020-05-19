require("../config/register");
const webpack = require("webpack");
const { promisifyCompiler } = require("./utils");

async function main() {
  const clientConfig = require("../config/webpack/client");
  const serverConfig = require("../config/webpack/server");
  const clientCompiler = webpack(clientConfig);
  const serverCompiler = webpack(serverConfig);
  const clientPromise = promisifyCompiler("client", clientCompiler);
  const serverPromise = promisifyCompiler("server", serverCompiler);

  clientCompiler.run();
  serverCompiler.run();

  try {
    await clientPromise;
    await serverPromise;
    console.log("Build is done!");
  } catch (error) {
    console.error(error);
  }
}

main();
