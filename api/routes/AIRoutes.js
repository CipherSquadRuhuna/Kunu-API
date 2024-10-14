const router = require("express").Router();
const { predictCollectionCenters } = require("../controllers/AIController.js");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

router.post(
  "/predict-centers",
  upload.single("file"),
  predictCollectionCenters
);

module.exports = router;
