const express = require("express");
const {
  login,
  register,
  verifyOTP,
} = require("../controllers/AuthController.js");

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/verify-otp", verifyOTP);

module.exports = router;
