const express = require("express");
const multer = require("multer");
const router = express.Router();

const { uploadPhotoToDb, getAllPhotos } = require("../data/photo.js");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/");
  },
  filename: function (req, file, cb) {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    cb(
      null,
      file.fieldname +
        file.originalname.substring(0, 3) +
        "-" +
        Date.now() +
        "." +
        extension
    );
  },
});

const upload = multer({ storage: storage }).single("image");

router.get("/", async (req, res) => {
  const photosData = await getAllPhotos("visible");
  // console.log(photosData);
  res.json({ images: photosData });
});

router.post("/upload", async function (req, res) {
  upload(req, res, function (err) {
    const imgData = {
      path: req.file.filename,
      description: req.body.description,
    };
    uploadPhotoToDb(imgData);

    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      error.console.log("A Multer error occurred when uploading.");
      res.statusCode = 500;
      res.send({ error: true, message: "Error uploading image" });
    } else if (err) {
      error.console.log("An unknown error occurred when uploading.");
      res.statusCode = 500;
      res.send({ error: true, message: "Error uploading image" });
    }
  });

  res.statusCode = 200;
  res.send({ error: false, message: "OK" });
});

module.exports = router;
