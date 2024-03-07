'use strict';

const parser = require('./lib/parser.js');
const manager = require('./lib/interfaces/manager.js');
const command = require('./lib/interfaces/command.js');

(async function main() {
  const { args, options } = command;
  const { out } = options;

  try {
    let result = '';
    for (const src of args) {
      const data = await manager.read(src);
      result += parser.render(data);
    }

    if (out) await manager.write(out, result);
    else console.log(result);
  } catch (error) {
    const message = 'Error: ' + error.message;

    if (out) await manager.write(out, message);
    else console.log('Error:', message);
    process.exit(1);
  }
})();
