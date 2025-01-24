// isse system se server pr data csv me ja rha h

const express = require("express");
const multer = require("multer");

const { bulkUploadBlogs } = require("../controller/bulkUploadC");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.post("/upload-csv", upload.single("file"), bulkUploadBlogs);


module.exports = router;
