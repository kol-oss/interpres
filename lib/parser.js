'use strict';

const { TAGS_KEYS, DELIMITERS } = require('./config');
const { converter } = require('./converter');

function join(rendered, format) {
  const TAGS = TAGS_KEYS[format];
  let result = rendered.join(TAGS.ABSTRACT.symbol);

  return result
    .replace(/\n<\/p>/g, TAGS.ABSTRACT.close)
    .replace(/\x1B\[7m\n/g, TAGS.PREFORMATTED.open)
    .replace(/\n\x1B\[0m/g, TAGS.ABSTRACT.close)
    .replace(/\n$/, '');
}

function render(data, format) {
  const lines = data.split(DELIMITERS.string);
  const rendered = [];

  const convert = converter(TAGS_KEYS[format]);

  for (let i = 0; i <= lines.length; i++) {
    const line = lines[i];
    if (line?.startsWith('//')) continue;

    const converted = convert(line);
    if (converted !== undefined) rendered.push(converted);
  }

  return join(rendered, format);
}

module.exports = {
  render,
};
