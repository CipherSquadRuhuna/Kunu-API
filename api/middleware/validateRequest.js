// middleware/validateRequest.js

const validateRequest = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    // Return the first validation error message
    const message = error.details.map((detail) => detail.message).join(", ");
    return res.json({
      status: "failed",
      message,
      data: [],
    });
  }
  next();
};

module.exports = validateRequest;
