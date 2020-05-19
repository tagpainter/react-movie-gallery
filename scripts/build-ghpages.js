require("../config/register");
const webpack = require("webpack");
const { promisifyCompiler } = require("./utils");
const fs = require("fs-extra");
const path = require("path");

const paths = require("../config/paths");

async function main() {
  const config = require("../config/webpack/ghpages");
  const compiler = webpack(config);
  const promise = promisifyCompiler("ghpages", compiler);

  compiler.run();

  try {
    await promise;
    console.log("Build is done!");
  } catch (error) {
    console.error(error);
    return;
  }

  try {
    fs.copySync(paths.I18N_DIR, path.resolve(paths.GHPAGES_DIST, "lang"));
    fs.writeFileSync(path.resolve(paths.GHPAGES_DIST, ".nojekyll"), "");
  } catch (error) {
    console.error(error);
    return;
  }
}
main();
