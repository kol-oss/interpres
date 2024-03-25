'use strict';

const { HTML_TAGS } = require('./output/html');
const { ANSI_TAGS } = require('./output/ansi');

const DELIMITERS = {
  string: '\n',
};

const EXTENSIONS = {
  formats: ['ansi', 'html'],
  input: ['.md', '.txt'],
  output: ['.html', '.txt'],
};

const ERROR_MESSAGES = {
  unfinished: 'invalid markdown: tag %s must be finished',
  included: `invalid markdown: tags can't be included: %s in %s`,
  noAccess: `has no access to open the file`,
  extension: `invalid extension, [${EXTENSIONS.input}] for input and [${EXTENSIONS.output}] for output`,
};

const TAGS_KEYS = {
  html: HTML_TAGS,
  ansi: ANSI_TAGS,
};

module.exports = {
  TAGS_KEYS,
  DELIMITERS,
  ERROR_MESSAGES,
  EXTENSIONS,
};
