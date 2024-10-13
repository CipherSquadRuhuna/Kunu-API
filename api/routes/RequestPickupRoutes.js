const router = require("express").Router();
const {
  CreateRequestPickUp,
} = require("../controllers/RequestPickUpController");
const validateRequest = require("../middleware/validateRequest");
const { RequestPickUpCreateSchema } = require("../schema/RequestPickUp");
const catchAsync = require("../utils/catchAsync");

router.post(
  "/create",
  validateRequest(RequestPickUpCreateSchema),
  catchAsync(CreateRequestPickUp)
);

module.exports = router;
