'use strict';

const { Command } = require('commander');
const program = new Command();

program
  .name('interpres-cli')
  .description('CLI for Markdown parsing library')
  .version('0.0.1');

program.argument('<path>', 'path to the .md file');

program.option('-o, --out <name>', 'save HTML output into file');
program.option('-f, --format <format>', 'use html or ansi format');

program.parse();

module.exports = {
  args: program.args,
  options: program.opts(),
};
