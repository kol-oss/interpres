'use strict';

const ANSI_ESCAPE_CODE = '\x1b[';

const ANSI_TAGS = {
  BOLD: {
    open: `${ANSI_ESCAPE_CODE}1m`,
    close: `${ANSI_ESCAPE_CODE}0m`,
    symbol: '**',
  },
  ITALIC: {
    open: `${ANSI_ESCAPE_CODE}3m`,
    close: `${ANSI_ESCAPE_CODE}0m`,
    symbol: '_',
  },
  MONOSPACED: {
    open: `${ANSI_ESCAPE_CODE}7m`,
    close: `${ANSI_ESCAPE_CODE}0m`,
    symbol: '`',
  },
  ABSTRACT: {
    open: undefined,
    close: `${ANSI_ESCAPE_CODE}0m`,
    symbol: '\n',
  },
  PREFORMATTED: {
    open: `${ANSI_ESCAPE_CODE}7m`,
    close: `${ANSI_ESCAPE_CODE}0m`,
    symbol: '```',
  },
};

module.exports = {
  ANSI_TAGS,
};
