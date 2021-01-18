const { DataTypes } = require("sequelize");
const db = require("../../database/connection").sequelize;
const status = db.define(
  "status",
  {
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
// `sequelize.define` also returns the model
// console.log(Kategori === sequelize.models.Kategori); // true
module.exports = status;
