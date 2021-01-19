const { DataTypes } = require("sequelize");
const db = require("../../database/connection").sequelize;
const label = db.define(
  "label",
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nama_label: {
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
async function allLabel(req) {
  return await label.findAll({
    where: {
      userId: req.user.userId,
    },
  });
}
async function insertLabel(params) {
  return await label.create(params);
}
async function updateLabel(req) {
  return await label.update(req.body, {
    where: {
      id: req.body.id,
    },
  });
}
async function deleteLabel(req) {
  return await label.destroy({
    where: {
      id: req.params.id,
    },
  });
}
// `sequelize.define` also returns the model
// console.log(Kategori === sequelize.models.Kategori); // true
module.exports = {
  label,
  allLabel,
  insertLabel,
  updateLabel,
  deleteLabel,
};
