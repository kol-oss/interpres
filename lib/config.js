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

const DEFAULT_REGEXP = {
  BOLD: /\*\*\s?([^\n]+)\*\*/g,
  ITALIC: /_\s?([^\n]+)_/g,
  MONOSPACED: /`\s?([^\n]+)`/g,
};

const DELIMITERS = {
  string: '\r\n',
};

module.exports = {
  DEFAULT_REGEXP,
  TAGS,
  DELIMITERS,
};
