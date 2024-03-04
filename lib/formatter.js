'use strict';

const { TAGS, ERROR_MESSAGES } = require('./config');
const { parseSymbols, getExpressions, matchAll, error } = require('./utils');

function checkLine(line) {
  const symbols = Object.entries(TAGS).map(([name, tag]) => tag.symbol);

  for (const symbol of symbols) {
    const { started, ended } = parseSymbols(line, symbol);

    if (!started.length && !ended.length) continue;
    else if (started.length !== ended.length)
      error(ERROR_MESSAGES.unfinished, symbol);

    for (let i = 0; i < started.length; i++) {
      const startIndex = started[i].index;
      const endIndex = ended[i].index + ended[i][0].trim().length;

      const content = line
        .substring(startIndex, endIndex)
        .trim()
        .slice(symbol.length, -1 * symbol.length);

      for (const subsymbol of symbols) {
        const { started: substarted } = parseSymbols(content, subsymbol);

        if (substarted.length)
          error(ERROR_MESSAGES.included, subsymbol, symbol);
      }
    }
  }
  return line;
}

function replace(line) {
  let replaced = line;

  for (const [name, tags] of Object.entries(TAGS)) {
    const { open, close, symbol } = tags;

    const { start, end } = getExpressions(symbol);

    const starts = matchAll(replaced, new RegExp(start, 'g'));
    const ends = matchAll(replaced, new RegExp(end, 'g'));

    for (let i = 0; i < starts.length; i++) {
      const startTag = starts[i][0];
      const endTag = ends[i][0];

      replaced = replaced
        .replace(startTag, startTag.replace(symbol, open))
        .replace(endTag, endTag.replace(symbol, close));
    }
  }

  return replaced;
}

function converter() {
  let isOpened = false;
  let isPreformatted = false;
  return (line) => {
    if (line === TAGS.PREFORMATTED.symbol) {
      isPreformatted = !isPreformatted;
      return isPreformatted ? TAGS.PREFORMATTED.open : TAGS.PREFORMATTED.close;
    }

    if (isPreformatted) return line || '';

    if (!line && isOpened) {
      isOpened = false;
      return TAGS.ABSTRACT.close;
    } else if (!line) return undefined;

    const checked = checkLine(line);
    let result = replace(checked);

    if (!isOpened) {
      result = TAGS.ABSTRACT.open + result;
      isOpened = true;
    }
    return result;
  };
}

module.exports = {
  converter,
};
