const express = require("express");
const catchAsync = require("../utils/catchAsync.js");
const validate = require("../middleware/validateRequest.js");
const { createComplain } = require("../controllers/ComplainContoller.js");
const { createComplainSchema } = require("../schema/createComplainSchema.js");

const router = express.Router();

router.post(
  "/create",
  validate(createComplainSchema),
  catchAsync(createComplain)
);

module.exports = router;
