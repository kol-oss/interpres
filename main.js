'use strict';

const parser = require('./lib/parser.js');
const manager = require('./lib/interfaces/manager.js');
const command = require('./lib/interfaces/command.js');
const { EXTENSIONS } = require('./lib/config');

(async function main() {
  const { args, options } = command;
  const { out, format = 'html' } = options;

  try {
    if (!EXTENSIONS.formats.includes(format.toLowerCase())) {
      throw new Error('format type must be html or ansi');
    }

    let result = '';
    for (const src of args) {
      const data = await manager.read(src);
      result += parser.render(data, format);
    }

    if (out) await manager.write(out, result);
    else console.log(result);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
})();
