const { DataTypes } = require("sequelize");
const db = require("../../database/connection").sequelize;
const status = db.define(
  "status",
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nama_status: {
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

async function allStatus(req) {
  return await status.findAll({
    where: {
      userId: req.user.userId,
    },
  });
}
async function insertStatus(params) {
  return await status.create(params);
}
async function updateStatus(req) {
  return await status.update(req.body, {
    where: {
      id: req.body.id,
    },
  });
}
async function deleteStatus(req) {
  return await status.destroy({
    where: {
      id: req.params.id,
    },
  });
}
// `sequelize.define` also returns the model
// console.log(Kategori === sequelize.models.Kategori); // true
module.exports = {
  status,
  allStatus,
  insertStatus,
  updateStatus,
  deleteStatus,
};
