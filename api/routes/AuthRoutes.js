const express = require("express");
const {
  login,
  register,
  verifyOTP,
  updateNameNIC,
  updatePassword,
  updateDistrict,
} = require("../controllers/AuthController.js");
const catchAsync = require("../utils/catchAsync.js");
const validate = require("../middleware/validateRequest.js");
const {
  loginSchema,
  registerSchema,
  verifyOTPSchema,
  updateNameNICSchema,
  updatePasswordSchema,
  updateDistrictSchema,
} = require("../schema/AuthSchemas.js");

const router = express.Router();

router.post("/login", validate(loginSchema), catchAsync(login));
router.post("/register", validate(registerSchema), catchAsync(register));
router.post("/verify-otp", validate(verifyOTPSchema), catchAsync(verifyOTP));
router.post(
  "/name-nic",
  validate(updateNameNICSchema),
  catchAsync(updateNameNIC)
);
router.post(
  "/update-password",
  validate(updatePasswordSchema),
  catchAsync(updatePassword)
);

router.post(
  "/district-municipal",
  validate(updateDistrictSchema),
  catchAsync(updateDistrict)
);

module.exports = router;
