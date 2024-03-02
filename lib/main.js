'use strict';

const parser = require('./parser');
const manager = require('./interfaces/manager');
const command = require('./interfaces/command');

(async function main() {
  const { args, options } = command;

  let result = '';
  for (const src of args) {
    const data = await manager.read(src);
    result += parser.render(data);
  }

  const { out } = options;
  if (out) await manager.write(result, out);
  else console.log(result);
})();
