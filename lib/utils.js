'use strict';

function error(message, ...args) {
  let text = '';

  let index = 0;
  for (let i = 0; i < message.length; i++) {
    if (message[i] === '%' && message[i + 1] === 's') {
      text += args[index];
      i++;
      index++;
    } else {
      text += message[i];
    }
  }

  throw new Error(text);
}

function matchAll(line, regexp) {
  const matches = line.matchAll(regexp);

  if (!matches) return [];
  return [...matches];
}

function getExpressions(symbol) {
  const letter = symbol[0];

  const escLetter = `\\${letter}`;
  const escaped = symbol.replace(new RegExp(escLetter, 'g'), escLetter);

  return {
    start: `(?:\\s|^)${escaped}[^\\s]`,
    end: `[^\\s]${escaped}(?:\\s|$)`,
  };
}

function parseSymbols(line, symbol) {
  const pattern = getExpressions(symbol);
  return {
    started: matchAll(line, new RegExp(pattern.start, 'g')),
    ended: matchAll(line, new RegExp(pattern.end, 'g')),
  };
}

module.exports = {
  error,
  getExpressions,
  parseSymbols,
  matchAll,
};
