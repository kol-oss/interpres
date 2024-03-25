'use strict';

const HTML_TAGS = {
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

module.exports = {
  HTML_TAGS,
};
