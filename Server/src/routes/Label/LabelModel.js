const { DataTypes } = require("sequelize");
const db = require("../../database/connection").sequelize;
const label = db.define(
  "label",
  {
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
// `sequelize.define` also returns the model
// console.log(Kategori === sequelize.models.Kategori); // true
module.exports = label;
