'use strict';

const parser = require('./lib/parser.js');
const manager = require('./lib/interfaces/manager.js');
const command = require('./lib/interfaces/command.js');

(async function main() {
  try {
    const { args, options } = command;

    let result = '';
    for (const src of args) {
      const data = await manager.read(src);
      result += parser.render(data);
    }

    const { out } = options;
    if (out) await manager.write(out, result);
    else console.log(result);
  } catch (error) {
    console.log('Error:', error.message);
  }
})();
