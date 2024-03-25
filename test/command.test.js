'use strict';

process.argv.push(
  './examples/1-simple.md',
  '--out',
  './examples/1-simple.txt',
  '--format',
  'ansi'
);
const { args, options } = require('../lib/interfaces/command');

const TEST_CASES = [
  {
    name: 'receives the input files',
    received: args,
    expected: ['./examples/1-simple.md'],
  },
  {
    name: 'receives the output file',
    received: options.out,
    expected: './examples/1-simple.txt',
  },
  {
    name: 'receives the format of output',
    received: options.format,
    expected: 'ansi',
  },
];

describe('command line interface', () => {
  for (const testCase of TEST_CASES) {
    test(testCase.name, () => {
      expect(testCase.received).toEqual(testCase.expected);
    });
  }
});
