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

const ERROR_MESSAGES = {
  start: 'Error: invalid markdown: ',
  unfinished: 'tag %s must be finished',
  included: `tags can't be included: %s in %s`,
};

module.exports = {
  TAGS,
  DELIMITERS,
  ERROR_MESSAGES,
};
