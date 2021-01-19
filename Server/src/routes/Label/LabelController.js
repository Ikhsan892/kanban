const LabelModel = require("./LabelModel");
const { handleResponse } = require("../../utils/authUtils");

function LabelAll(req, res) {
  LabelModel
    .allLabel(req)
    .then(function (params) {
      return handleResponse(req, res, 201, params);
    })
    .catch(function (err) {
      return handleResponse(req, res, 500, err.message);
    });
}
function LabelInsert(req, res) {
  const id = {
    userId: req.user.userId,
  };
  const response = Object.assign(req.body, id);
  LabelModel
    .insertLabel(response)
    .then(function () {
      return handleResponse(req, res, 201, "New Label has been created");
    })
    .catch(function (err) {
      return handleResponse(req, res, 500, err.message);
    });
}
function LabelUpdate(req, res) {
  LabelModel
    .updateLabel(req)
    .then(function () {
      return handleResponse(req, res, 201, "Label has been updated");
    })
    .catch(function (err) {
      return handleResponse(req, res, 500, err.message);
    });
}
function LabelDelete(req, res) {
  if (req.params.id === undefined || req.params.id === null) {
    return handleResponse(req, res, 500, "You not passing anything, stupid");
  }
  LabelModel
    .deleteLabel(req)
    .then(function () {
      return handleResponse(req, res, 201, "Label has been deleted");
    })
    .catch(function (err) {
      return handleResponse(req, res, 500, err.message);
    });
}

module.exports = { LabelAll, LabelInsert, LabelUpdate, LabelDelete };
