const express = require("express");
const catchAsync = require("../utils/catchAsync.js");
const validate = require("../middleware/validateRequest.js");
const {
  createGrabageComplain,
  createServiceComplain,
} = require("../controllers/ComplainContoller.js");
const {
  createGarbageComplainSchema,
  createServiceComplainSchema,
} = require("../schema/createComplainSchema.js");

const router = express.Router();

router.post(
  "/grabage/create",
  validate(createGarbageComplainSchema),
  catchAsync(createGrabageComplain)
);

router.post(
  "/service/create",
  validate(createServiceComplainSchema),
  catchAsync(createServiceComplain)
);

module.exports = router;
