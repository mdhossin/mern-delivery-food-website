const router = require("express").Router();
const cloudinary = require("cloudinary");

const fs = require("fs");

// we will upload image on cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload image only admin can use

router.post("/upload", (req, res, next) => {
  console.log(req.files);
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ message: "No files were uploaded." });
    }

    const file = req.files.file;
    if (file.size > 1024 * 1024) {
      removeTmp(file.tempFilePath);

      return res.status(400).json({ message: "Size too large." });
    }

    if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
      removeTmp(file.tempFilePath);

      return res.status(400).json({ message: "File format is incorrect." });
    }

    cloudinary.v2.uploader.upload(
      file.tempFilePath,
      { folder: "yummy-food-delivery" },
      async (err, result) => {
        if (err) throw err;
        // console.log(result);
        removeTmp(file.tempFilePath);

        res.json({
          public_id: result.public_id,
          url: result.secure_url,
          message: "Image upload successfull!",
        });
      }
    );
  } catch (err) {
    return res.status(500).json({ message: "Server Error." });
  }
});

router.post("/destroy", (req, res) => {
  try {
    const { public_id } = req.body;
    if (!public_id)
      return res.status(400).json({ message: "No image Selected" });

    cloudinary.v2.uploader.destroy(public_id, async (err, result) => {
      if (err) throw err;
      // console.log(result);
      res.json({ message: "Deleted Image" });
    });
  } catch (err) {
    return res.status(500).json({ message: "Server Error." });
  }
});

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};

module.exports = router;
