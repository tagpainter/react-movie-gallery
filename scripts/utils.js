exports.promisifyChild = child => {
  return new Promise((resolve, reject) => {
    child.on("close", code => {
      if (code == 0)
        return resolve({ code, stdout: child.stdout, stderr: child.stderr });
      return reject({ code, stdout: child.stdout, stderr: child.stderr });
    });
  });
};

exports.promisifyCompiler = (name, compiler) => {
  return new Promise((resolve, reject) => {
    compiler.hooks.compile.tap(name, () => {
      console.log(`[${name}] Compiling`);
    });
    compiler.hooks.done.tap(name, stats => {
      if (!stats.hasErrors()) return resolve();
      return reject(`Failed to compile ${name}`);
    });
  });
};
