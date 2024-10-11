const Joi = require("joi");
const createComplainSchema = Joi.object({
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

module.exports = { createComplainSchema };
