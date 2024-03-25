'use strict';

const { throwError } = require('../lib/utils');

describe('utils', () => {
  test('throw error', () => {
    expect(() => throwError('This is %s message', 'my error')).toThrow(
      'This is my error message'
    );
  });
});
