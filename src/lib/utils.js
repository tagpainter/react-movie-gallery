export function sleep(ms = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

export function random(...args) {
  let min = 0,
    max = 1;
  if (args.length == 2) {
    min = args[0];
    max = args[1];
  } else if (args.length == 1) {
    max = args[0];
  }
  return Math.round(Math.random() * (max - min)) + min;
}
