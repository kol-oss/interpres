'use strict';

const TAGS = {
  BOLD: {
    open: '<b>',
    close: '</b>',
    symbol: '**',
  },
  ITALIC: {
    open: '<i>',
    close: '</i>',
    symbol: '_',
  },
  MONOSPACED: {
    open: '<tt>',
    close: '</tt>',
    symbol: '`',
  },
  ABSTRACT: {
    open: '<p>',
    close: '</p>',
    symbol: '\n',
  },
  PREFORMATTED: {
    open: '<pre>',
    close: '</pre>',
    symbol: '```',
  },
};

const DELIMITERS = {
  string: '\r\n',
};

const EXTENSIONS = {
  input: ['.md', '.txt'],
  output: ['.html', '.txt'],
};

const ERROR_MESSAGES = {
  unfinished: 'invalid markdown: tag %s must be finished',
  included: `invalid markdown: tags can't be included: %s in %s`,
  noAccess: `has no access to open the file`,
  extension: `invalid extension, [${EXTENSIONS.input}] for input and [${EXTENSIONS.output}] for output `,
};

module.exports = {
  TAGS,
  DELIMITERS,
  ERROR_MESSAGES,
  EXTENSIONS,
};
