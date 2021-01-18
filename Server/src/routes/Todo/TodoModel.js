const { DataTypes } = require("sequelize");
const db = require("../../database/connection").sequelize;
const todo = db.define(
  "todo",
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    kegiatan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    statusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tenggat: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    persentase: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    labelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    kategoriId: {
      type: DataTypes.INTEGER,
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
module.exports = todo;
