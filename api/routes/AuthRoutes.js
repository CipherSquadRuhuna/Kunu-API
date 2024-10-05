const express = require("express");
const {
  login,
  register,
  verifyOTP,
  updateNameNIC,
} = require("../controllers/AuthController.js");

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/verify-otp", verifyOTP);
router.post("/name-nic", updateNameNIC);

module.exports = router;
