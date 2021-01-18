const userModel = require("./UserModel");
const {
  refreshTokens,
  COOKIE_OPTIONS,
  generateToken,
  generateRefreshToken,
  getCleanUser,
  handleResponse,
} = require("../../utils/authUtils");

function UserLogin(req, res, next) {
  userModel
    .findUserForLogin(req.body.nama, req.body.password)
    .then(function (userData) {
      if (userData === null) {
        return handleResponse(
          req,
          res,
          401,
          null,
          "Username or Password is Wrong."
        );
      } else {
        const userObj = getCleanUser(userData);
        const tokenObj = generateToken(userData);
        const refreshToken = generateRefreshToken(userObj.userId);
        refreshTokens[refreshToken] = tokenObj.xsrfToken;
        res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);
        res.cookie("X-XSRF-TOKEN", tokenObj.xsrfToken);
        return handleResponse(req, res, 200, {
          user: userObj,
          token: tokenObj.token,
          expiredAt: tokenObj.expiredAt,
        });
      }
      next();
    })
    .catch(function (err) {
      return handleResponse(req, res, 500, {
        message: err.message,
      });
    });
}
function UserSignup(req, res, next) {
  const arr = [];
  arr["nama_depan"] = req.body.nama_depan;
  arr["nama_belakang"] = req.body.nama_belakang;
  arr["umur"] = req.body.umur;
  arr["gender"] = req.body.gender;
  arr["hobi"] = req.body.hobi;
  arr["ttl"] = req.body.ttl;
  arr["alamat"] = req.body.alamat;
  arr["kecamatan"] = req.body.kecamatan;
  arr["kota_kabupaten"] = req.body.kota_kabupaten;
  arr["password"] = req.body.password;
  userModel
    .insertNewUser(arr)
    .then(function (e) {
      return handleResponse(req, res, 201, "New User has been Created");
    })
    .catch(function (err) {
      return handleResponse(req, res, 500, err.message);
    });
}

module.exports = { UserLogin, UserSignup };
