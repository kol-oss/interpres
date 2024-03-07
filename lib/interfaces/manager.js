'use strict';

const fs = require('node:fs/promises');
const path = require('node:path');

const { error } = require('../utils');
const { EXTENSIONS, ERROR_MESSAGES } = require('../config');

function checkPath(filePath, input = true) {
  const extension = path.extname(filePath);

  const include = input
    ? EXTENSIONS.input.includes(extension)
    : EXTENSIONS.output.includes(extension);

  if (!include) {
    error(ERROR_MESSAGES.extension);
  }
}

async function checkAccess(filePath, input = true) {
  try {
    const { access, constants } = fs;
    await access(filePath, constants.R_OK | constants.W_OK);

    return true;
  } catch (error) {
    if (!input) return;
    error(ERROR_MESSAGES.noAccess);
  }
}

async function convertPath(filePath, input = true) {
  checkPath(filePath, input);
  await checkAccess(filePath, input);

  return path.resolve(filePath);
}

async function read(filePath) {
  const fullPath = await convertPath(filePath);

  return fs.readFile(fullPath, 'utf-8');
}

async function write(filePath, data) {
  const fullPath = await convertPath(filePath, false);

  return fs.writeFile(fullPath, data, 'utf-8');
}

module.exports = {
  read,
  write,
};
