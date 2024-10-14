// validators.js

const Joi = require("joi");

// login schema
const loginSchema = Joi.object({
  phone_number: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required()
    .messages({
      "string.base": "Mobile number must be a string",
      "string.empty": "Mobile number can't be empty",
      "string.length": "Mobile number must be exactly 10 digits",
      "string.pattern.base": "Mobile number must contain only numbers",
      "any.required": "Mobile number is required",
    }),
  password: Joi.string().min(8).required().messages({
    "string.base": "Password must be a string",
    "string.empty": "Password can't be empty",
    "string.min": "Password must be at least 8 characters long",
    "any.required": "Password is required",
  }),
});

// Register schema
const registerSchema = Joi.object({
  phone_number: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required()
    .messages({
      "string.base": "Mobile number must be a string",
      "string.empty": "Mobile number can't be empty",
      "string.length": "Mobile number must be exactly 10 digits",
      "string.pattern.base": "Mobile number must contain only numbers",
      "any.required": "Mobile number is required",
    }),
});

// OTP verification schema
const verifyOTPSchema = Joi.object({
  phone_number: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required()
    .messages({
      "string.empty": "Phone number is required",
      "string.length": "Phone number must be exactly 10 digits",
      "string.pattern.base": "Phone number must contain only numbers",
      "any.required": "Phone number is required",
    }),
  otp: Joi.string()
    .length(5)
    .pattern(/^[0-9]+$/)
    .required()
    .messages({
      "string.empty": "OTP is required",
      "string.length": "OTP must be exactly 5 digits",
      "string.pattern.base": "OTP must contain only numbers",
      "any.required": "OTP is required",
    }),
});

// Update Name and NIC schema
const updateNameNICSchema = Joi.object({
  user_id: Joi.string().required().messages({
    "string.empty": "User ID is required",
    "any.required": "User ID is required",
  }),
  full_name: Joi.string().min(3).required().messages({
    "string.empty": "Full name is required",
    "string.min": "Full name should be at least 3 characters long",
    "any.required": "Full name is required",
  }),
  nic: Joi.string().min(10).max(12).required().messages({
    "string.empty": "NIC is required",
    "string.min": "NIC should be at least 10 characters long",
    "string.max": "NIC should not exceed 12 characters",
    "any.required": "NIC is required",
  }),
});

// Update password schema
const updatePasswordSchema = Joi.object({
  user_id: Joi.string().required().messages({
    "string.empty": "User ID is required",
    "any.required": "User ID is required",
  }),
  password: Joi.string().min(8).required().messages({
    "string.empty": "Password should not be empty",
    "string.min": "Password should be at least 8 characters long",
    "any.required": "Password is required",
  }),
});

const updateDistrictSchema = Joi.object({
  user_id: Joi.string().required().messages({
    "string.empty": "User ID is required",
    "any.required": "User ID is required",
  }),
  district: Joi.string().required().messages({
    "string.empty": "District is required",
    "any.required": "District is required",
  }),
  municipal_council: Joi.string().required().messages({
    "string.empty": "Municipal council is required",
    "any.required": "Municipal council is required",
  }),
});

module.exports = {
  registerSchema,
  verifyOTPSchema,
  updateNameNICSchema,
  updatePasswordSchema,
  loginSchema,
  updateDistrictSchema,
};
