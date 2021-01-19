const express = require("express");
const router = express.Router();
const {
  refreshTokens,
  generateToken,
  getCleanUser,
  verifyToken,
  clearTokens,
  handleResponse,
} = require("../../utils/authUtils");
const {
  UserLogin,
  UserSignup,
  UserVerify,
  UserUpdate,
} = require("./UserController");
const authMiddleware = require("../../middleware/authMiddleware");

router.post("/verify", authMiddleware, UserVerify);
router.post("/signup", UserSignup);
router.post("/login", UserLogin);
router.put("/update", authMiddleware, UserUpdate);
router.post("/logout", (req, res) => {
  clearTokens(req, res);
  return handleResponse(req, res, 204);
});
// verify the token and return new tokens if it's valid
router.post("/verifyToken", function (req, res) {
  const { signedCookies = {} } = req;
  const { refreshToken } = signedCookies;
  if (!refreshToken) {
    return handleResponse(req, res, 204);
  }
  const xsrfToken = req.headers["x-xsrf-token"];
  if (
    !xsrfToken ||
    !(refreshToken in refreshTokens) ||
    refreshTokens[refreshToken] !== xsrfToken
  ) {
    return handleResponse(req, res, 401);
  }
  verifyToken(refreshToken, "", function (err, payload) {
    if (err) {
      return handleResponse(req, res, 401);
    } else {
      const userData = userList.find((x) => x.userId === payload.userId);
      if (!userData) {
        return handleResponse(req, res, 401);
      }
      const userObj = getCleanUser(userData);
      const tokenObj = generateToken(userData);
      refreshTokens[refreshToken] = tokenObj.xsrfToken;
      res.cookie("XSRF-TOKEN", tokenObj.xsrfToken);
      return handleResponse(req, res, 200, {
        user: userObj,
        token: tokenObj.token,
        expiredAt: tokenObj.expiredAt,
      });
    }
  });
});

module.exports = router;
