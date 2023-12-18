const db = require("./utils/db");
const fs = require("fs");
const { readData, writeData } = require("./utils.js");
const { v4: generateId } = require("uuid");
async function getAllNotes() {
  const storedData = await readData();
  if (!storedData.notes) {
    throw new NotFoundError("Could not find any notes.");
  }
  return storedData;
}

async function getAllPhotos() {
  db.query("SELECT * from images;", function (err, result) {
    if (err) throw err;
    setTimeout(() => {
      return result;
    }, 0);
  });
}

async function addNewNote(data) {
  const storedData = await readData();
  storedData.notes.unshift({ ...data, id: generateId() });
  await writeData(storedData);
}

exports.getAllNotes = getAllNotes;
exports.addNewNote = addNewNote;
exports.getAllPhotos = getAllPhotos;
