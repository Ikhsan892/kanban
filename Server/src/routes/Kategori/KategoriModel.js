const { DataTypes } = require("sequelize");
const db = require("../../database/connection").sequelize;
const kategori = db.define(
  "kategori",
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nama_kategori: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    createdAt: false,
    freezeTableName: true,
  }
);
async function allKategori(req) {
  return await kategori.findAll({
    where: {
      userId: req.user.userId,
    },
  });
}
async function insertKategori(params) {
  return await kategori.create(params);
}
async function updateKategori(req) {
  return await kategori.update(req.body, {
    where: {
      id: req.body.id,
    },
  });
}
async function deleteKategori(req) {
  return await kategori.destroy({
    where: {
      id: req.params.id,
    },
  });
}
// `sequelize.define` also returns the model
// console.log(Kategori === sequelize.models.Kategori); // true
module.exports = {
  kategori,
  allKategori,
  insertKategori,
  updateKategori,
  deleteKategori,
};
