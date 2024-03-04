'use strict';

const { ERROR_MESSAGES } = require('./config');

function error(message, ...args) {
  const text = ERROR_MESSAGES.start + message;

  console.log(text, ...args);
  process.exit(1);
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
