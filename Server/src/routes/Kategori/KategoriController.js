const KategoriModel = require("./KategoriModel");
const { handleResponse } = require("../../utils/authUtils");

function KategoriAll(req, res) {
  KategoriModel.allKategori(req)
    .then(function (params) {
      return handleResponse(req, res, 201, params);
    })
    .catch(function (err) {
      return handleResponse(req, res, 500, err.message);
    });
}
function KategoriInsert(req, res) {
  const id = {
    userId: req.user.userId,
  };
  const response = Object.assign(req.body, id);
  KategoriModel.insertKategori(response)
    .then(function () {
      return handleResponse(req, res, 201, "New Kategori has been created");
    })
    .catch(function (err) {
      return handleResponse(req, res, 500, err.message);
    });
}
function KategoriUpdate(req, res) {
  KategoriModel.updateKategori(req)
    .then(function () {
      return handleResponse(req, res, 201, "Kategori has been updated");
    })
    .catch(function (err) {
      return handleResponse(req, res, 500, err.message);
    });
}
function KategoriDelete(req, res) {
  if (req.params.id === undefined || req.params.id === null) {
    return handleResponse(req, res, 500, "You not passing anything, stupid");
  }
  KategoriModel.deleteKategori(req)
    .then(function () {
      return handleResponse(req, res, 201, "Kategori has been deleted");
    })
    .catch(function (err) {
      return handleResponse(req, res, 500, err.message);
    });
}

module.exports = { KategoriAll, KategoriInsert, KategoriUpdate, KategoriDelete };
