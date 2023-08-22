const fs = require('node:fs/promises');

const { v4: generateId } = require('uuid');

const { NotFoundError } = require('../util/errors');

async function readData() {
  const data = await fs.readFile('collections.json', 'utf8');
  return JSON.parse(data);
}

async function writeData(data) {
  await fs.writeFile('collections.json', JSON.stringify(data));
}

async function getAll() {
  const storedData = await readData();
  if (!storedData.collections) {
    throw new NotFoundError('Could not find any collections.');
  }
  return storedData.collections;
}

async function get(id) {
  const storedData = await readData();
  if (!storedData.collections || storedData.collections.length === 0) {
    throw new NotFoundError('Could not find any collections.');
  }

  const collection = storedData.collections.find((ev) => ev.id === id);
  if (!collection) {
    throw new NotFoundError('Could not find collection for id ' + id);
  }

  return collection;
}

async function add(data) {
  const storedData = await readData();
  storedData.collections.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

async function replace(id, data) {
  const storedData = await readData();
  if (!storedData.collections || storedData.collections.length === 0) {
    throw new NotFoundError('Could not find any collections.');
  }

  const index = storedData.collections.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError('Could not find collection for id ' + id);
  }

  storedData.collections[index] = { ...data, id };

  await writeData(storedData);
}

async function remove(id) {
  const storedData = await readData();
  const updatedData = storedData.collections.filter((ev) => ev.id !== id);
  await writeData({collections: updatedData});
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
