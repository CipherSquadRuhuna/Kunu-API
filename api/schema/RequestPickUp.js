const Joi = require("joi");

const RequestPickUpCreateSchema = Joi.object({
  user_id: Joi.number().required().messages({
    "number.base": "User ID must be a number",
    "any.required": "User ID is required",
  }),
  waste_type: Joi.string().required().messages({
    "string.base": "Waste Type must be a string",
    "string.empty": "Waste Type can't be empty",
    "any.required": "Waste Type is required",
  }),
  location: Joi.string().required().messages({
    "string.base": "Location must be a string",
    "string.empty": "Location can't be empty",
    "any.required": "Location is required",
  }),
  no_of_bags: Joi.number().required().messages({
    "number.base": "Number of bags must be a number",
    "any.required": "Number of bags is required",
  }),
  payment_type: Joi.string().required().messages({
    "string.base": "Payment Type must be a string",
    "string.empty": "Payment Type can't be empty",
    "any.required": "Payment Type is required",
  }),
});

module.exports = { RequestPickUpCreateSchema };
