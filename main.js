'use strict';

const cli = require('./lib/interfaces/command');

function main() {
  const { args, options } = cli;

  console.log(args, options);
}

main();
