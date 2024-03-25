'use strict';

const parser = require('../lib/parser');

const POSITIVE_TEST_CASES = [
  {
    name: 'bold html',
    received: '**Bold**',
    expected: '<p><b>Bold</b></p>',
    format: 'html',
  },
  {
    name: 'italic html',
    received: '_Italics_',
    expected: '<p><i>Italics</i></p>',
    format: 'html',
  },
  {
    name: 'monospaced html',
    received: '`Monospaced`',
    expected: '<p><tt>Monospaced</tt></p>',
    format: 'html',
  },
  {
    name: 'abstracted html',
    received: 'One abstract\nStill one abstract\n\nNew abstract',
    expected: '<p>One abstract\nStill one abstract</p>\n<p>New abstract</p>',
    format: 'html',
  },
  {
    name: 'preformatted html',
    received: "```\nThis **text** won't be formatted\n```",
    expected: "<p><pre>\nThis **text** won't be formatted\n</pre></p>",
    format: 'html',
  },
  {
    name: 'bold ansi',
    received: '**Bold**',
    expected: '\x1b[1mBold\x1b[0m',
    format: 'ansi',
  },
  {
    name: 'italic ansi',
    received: '_Italics_',
    expected: '\x1b[3mItalics\x1b[0m',
    format: 'ansi',
  },
  {
    name: 'monospaced ansi',
    received: '`Monospaced`',
    expected: '\x1b[7mMonospaced\x1b[0m',
    format: 'ansi',
  },
  {
    name: 'preformatted ansi',
    received: "```\nThis **text** won't be formatted\n```",
    expected: "\x1b[7mThis **text** won't be formatted\x1b[0m",
    format: 'ansi',
  },
];

const NEGATIVE_TEST_CASES = [
  {
    name: 'included html',
    received: 'when you try to **include _one_ tag into `another`**',
    error: "invalid markdown: tags can't be included: _ in **",
    format: 'html',
  },
  {
    name: 'unfinished html',
    received: 'It must **be finished on the same line',
    error: 'invalid markdown: tag ** must be finished',
    format: 'html',
  },
  {
    name: 'included ansi',
    received: 'when you try to **include _one_ tag into `another`**',
    error: "invalid markdown: tags can't be included: _ in **",
    format: 'ansi',
  },
  {
    name: 'unfinished ansi',
    received: 'It must **be finished on the same line',
    error: 'invalid markdown: tag ** must be finished',
    format: 'ansi',
  },
];
describe('parser', () => {
  for (const positiveTestCase of POSITIVE_TEST_CASES) {
    test(positiveTestCase.name, () => {
      const { received, expected, format } = positiveTestCase;

      const rendered = parser.render(received, format);

      expect(rendered).toBe(expected);
    });
  }

  for (const negativeTestCase of NEGATIVE_TEST_CASES) {
    test(negativeTestCase.name, () => {
      const { received, format, error } = negativeTestCase;

      expect(() => parser.render(received, format)).toThrow(error);
    });
  }
});
