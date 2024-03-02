'use strict';

const { TAGS, DELIMITERS } = require('./config');
const { formatConverter } = require('./formatter');

function join(rendered) {
  let result = rendered.join('\n');

  return result.replace(/\n<\/p>/g, TAGS.ABSTRACT.close);
}

function render(data) {
  const lines = data.split(DELIMITERS.string);
  const formatter = formatConverter(lines);

  const rendered = [];
  for (let i = 0; i < lines.length; i++) {
    rendered.push(formatter(i));
  }

  return join(rendered);
}

module.exports = {
  render,
};
