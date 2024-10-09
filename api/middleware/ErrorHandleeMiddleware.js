const ErrorHandleMiddleware = (err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = "Oh No, Something Went Wrong!";

  res.status(statusCode).json({
    status: "error",
    message: err.message,
  });
};

module.exports = ErrorHandleMiddleware;
