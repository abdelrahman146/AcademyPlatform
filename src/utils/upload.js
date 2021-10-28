const multer = require("multer");
const fs = require("fs");
const { rootPath } = require("../config");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const date = new Date();
    const dest = path.join(
      rootPath,
      "uploads",
      `${file.fieldname}s`,
      `${date.getFullYear()}-${date.getMonth() + 1}`
    );
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    file.public_path = `uploads/${file.fieldname}s/${date.getFullYear()}-${
      date.getMonth() + 1
    }`;
    cb(null, dest);
  },
  filename: function (req, file, cb) {
    const fileFormat = file.originalname.split(".").pop().toLocaleLowerCase();
    const filename = `${file.fieldname}-${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}.${fileFormat}`;
    cb(null, filename);
  },
});

module.exports = multer({
  storage: storage,
  onError: (err, next) => {
    console.error(`Multer Error: ${err}`);
    next(err);
  },
});
