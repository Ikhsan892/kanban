const { handleResponse } = require("../utils/authUtils");
const reqMiddleware = function (req, res, next) {
  if (req.body === undefined || req.body === null) {
    return handleResponse(req, res, 204, "You are not passed anything");
  }
  next();
};

module.exports = reqMiddleware;
