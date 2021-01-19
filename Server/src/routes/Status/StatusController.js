const statusModel = require("./StatusModel");
const { handleResponse } = require("../../utils/authUtils");

function StatusAll(req, res) {
  statusModel
    .allStatus(req)
    .then(function (params) {
      return handleResponse(req, res, 201, params);
    })
    .catch(function (err) {
      return handleResponse(req, res, 500, err.message);
    });
}
function StatusInsert(req, res) {
  const id = {
    userId: req.user.userId,
  };
  const response = Object.assign(req.body, id);
  statusModel
    .insertStatus(response)
    .then(function () {
      return handleResponse(req, res, 201, "New Status has been created");
    })
    .catch(function (err) {
      return handleResponse(req, res, 500, err.message);
    });
}
function StatusUpdate(req, res) {
  statusModel
    .updateStatus(req)
    .then(function () {
      return handleResponse(req, res, 201, "Status has been updated");
    })
    .catch(function (err) {
      return handleResponse(req, res, 500, err.message);
    });
}
function StatusDelete(req, res) {
  if (req.params.id === undefined || req.params.id === null) {
    return handleResponse(req, res, 500, "You not passing anything, stupid");
  }
  statusModel
    .deleteStatus(req)
    .then(function () {
      return handleResponse(req, res, 201, "Status has been deleted");
    })
    .catch(function (err) {
      return handleResponse(req, res, 500, err.message);
    });
}

module.exports = { StatusAll, StatusInsert, StatusUpdate, StatusDelete };
