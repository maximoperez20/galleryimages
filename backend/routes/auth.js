const express = require("express");
const router = express.Router();

const { getAllNotes, addNewNote } = require("../data/note.js");

router.get("/", async (req, res) => {
  const notesData = await getAllNotes();
  res.json(notesData);
});
module.exports = router;

router.post("/add", async (req, res) => {
  console.log(req.body);
  const newNote = {
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    tags: req.body.tags,
  };
  await addNewNote(newNote);
  res.send("ok");
});
