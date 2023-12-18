const express = require("express");
const router = express.Router();

const {
  getAllPhotos,
  setPhotoVisible,
  setPhotoRejected,
} = require("../data/photo.js");

router.get("/photos/:mode", async (req, res) => {
  const mode = req.params.mode;
  if (!["visible", "novisible", "all"].includes(mode)) {
    res.statusCode = 400;
    res.send({ error: true, message: "Incorrect mode of get photos." });
  } else {
    const photosData = await getAllPhotos(mode);
    // console.log(photosData);
    res.json({ images: photosData });
  }
});

router.post("/photos/approve/", async (req, res) => {
  const id = req.body.id;
  await setPhotoVisible(id);
  res.send({ message: "OK" });
});

router.post("/photos/reject/", async (req, res) => {
  const id = req.body.id;
  await setPhotoRejected(id);
  res.send({ message: "OK" });
});

module.exports = router;
