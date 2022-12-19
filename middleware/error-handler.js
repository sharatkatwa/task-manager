const { customApiError } = require('../errors/custom-error');

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof customApiError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  return res
    .status(500)
    .json({ msg: 'Somthing went wrong, Please try again later' });
};
module.exports = errorHandlerMiddleware;
