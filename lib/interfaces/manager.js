'use strict';

const fs = require('node:fs/promises');
const path = require('node:path');

function checkPath(filePath) {
  const extension = path.extname(filePath);
  if (extension !== '.md') {
    throw new Error(`invalid extension, only .md allowed`);
  }
}

async function checkAccess(filePath) {
  try {
    const { access, constants } = fs;
    await access(filePath, constants.R_OK | constants.W_OK);

    return true;
  } catch (error) {
    throw new Error(`has no access to open the file: ${error}`);
  }
}

async function convertPath(filePath) {
  checkPath(filePath);
  await checkAccess(filePath);

  return path.resolve(filePath);
}

async function read(filePath) {
  const fullPath = await convertPath(filePath);

  return fs.readFile(fullPath, 'utf-8');
}

async function write(filePath, data) {
  const fullPath = await convertPath(filePath);

  return fs.writeFile(fullPath, data, 'utf-8');
}

module.exports = {
  read,
  write,
};
