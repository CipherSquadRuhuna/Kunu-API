const Joi = require("joi");
const createGarbageComplainSchema = Joi.object({
  user_id: Joi.number().required().messages({
    "number.base": "User ID must be a number",
    "any.required": "User ID is required",
  }),
  location: Joi.string().required().messages({
    "string.base": "Location must be a string",
    "string.empty": "Location can't be empty",
    "any.required": "Location is required",
  }),
  attached_image: Joi.string().optional(),
  remarks: Joi.string().optional(),
});

const createServiceComplainSchema = Joi.object({
  user_id: Joi.number().required().messages({
    "number.base": "User ID must be a number",
    "any.required": "User ID is required",
  }),
  municiple_councial_id: Joi.number().required().messages({
    "number.base": "Municipality ID must be a number",
    "any.required": "Municipality ID is required",
  }),
  complain: Joi.string().required().messages({
    "string.base": "Complain must be a string",
    "string.empty": "Complain can't be empty",
    "any.required": "Complain is required",
  }),
});
module.exports = { createGarbageComplainSchema, createServiceComplainSchema };
