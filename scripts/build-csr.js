require("../config/register");
const webpack = require("webpack");
const { promisifyCompiler } = require("./utils");

async function main() {
  const clientConfig = require("../config/webpack/client");
  const clientCompiler = webpack(clientConfig);
  const clientPromise = promisifyCompiler("client", clientCompiler);

  clientCompiler.run();

  try {
    await clientPromise;
    console.log("Build is done!");
  } catch (error) {
    console.error(error);
  }
}
main();
