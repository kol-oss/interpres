'use strict';

const { read } = require('../lib/interfaces/manager');

const TEST_CASES = [
  {
    name: 'read existing file',
    received: './examples/1-simple.md',
    error: undefined,
  },
  {
    name: 'read unexisting file',
    received: './examples/1-not-simple.md',
    error: 'has no access to open the file',
  },
  {
    name: 'read null file path',
    received: '',
    error:
      'invalid extension, [.md,.txt] for input and [.html,.txt] for output',
  },
  {
    name: 'read file without extension',
    received: '../examples/1-simple',
    error:
      'invalid extension, [.md,.txt] for input and [.html,.txt] for output',
  },
];

describe('file system manager', () => {
  for (const testCase of TEST_CASES) {
    test(testCase.name, async () => {
      try {
        await read(testCase.received);
      } catch (error) {
        if (!testCase.error) throw new Error(error);

        expect(testCase.error).toBe(error.message);
      }
    });
  }
});
