const { DEFAULT_REGEXP, TAGS } = require('./config');

function formatLine(line) {
  let formatted = line;

  for (const [name, regexp] of Object.entries(DEFAULT_REGEXP)) {
    const tag = TAGS[name];
    const replacement = `${tag.open}$1${tag.close}`;

    formatted = formatted.replace(regexp, replacement);
  }

  return formatted;
}

function abstractConverter() {
  let isAbstractOpened = false;
  return (line) => {
    if (!line && isAbstractOpened) {
      isAbstractOpened = false;
      return `${line}${TAGS.ABSTRACT.close}`;
    }

    if (!isAbstractOpened) {
      isAbstractOpened = true;
      return `${TAGS.ABSTRACT.open}${line}`;
    }

    return line;
  };
}

function generateLine(index, lines, isPreformatting, abstracter) {
  const line = lines[index];
  const formatted = formatLine(line);

  let result = abstracter(formatted);
  if (!isPreformatting && index === lines.length - 1) {
    result += TAGS.ABSTRACT.close;
  }
  return result;
}

function formatConverter(lines) {
  const abstracter = abstractConverter();
  let isPreformatting = false;

  return (index) => {
    const line = lines[index];

    if (!line.includes(TAGS.PREFORMATTED.symbol)) {
      const formatted = generateLine(index, lines, isPreformatting, abstracter);
      return isPreformatting ? line : formatted;
    }

    if (isPreformatting) {
      isPreformatting = false;
      return `${TAGS.PREFORMATTED.close}`;
    }
    const isExists = lines.indexOf(TAGS.PREFORMATTED.symbol, index);
    if (isExists === -1) {
      return generateLine(index, lines, isPreformatting, abstracter);
    }

    isPreformatting = true;
    return `${TAGS.PREFORMATTED.open}`;
  };
}

module.exports = {
  formatConverter,
};
