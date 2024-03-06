'use strict';

const { TAGS, DELIMITERS } = require('./config');
const { converter } = require('./converter');

function join(rendered) {
  let result = rendered.join(TAGS.ABSTRACT.symbol);

  return result.replace(/\n<\/p>/g, TAGS.ABSTRACT.close);
}

function render(data) {
  const lines = data.split(DELIMITERS.string);
  const rendered = [];

  const convert = converter();

  for (let i = 0; i <= lines.length; i++) {
    const line = lines[i];
    if (line?.startsWith('//')) continue;

    const converted = convert(line);
    if (converted !== undefined) rendered.push(converted);
  }

  return join(rendered);
}

module.exports = {
  render,
};
