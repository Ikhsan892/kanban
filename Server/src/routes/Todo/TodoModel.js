const { DataTypes } = require("sequelize");
const db = require("../../database/connection").sequelize;
const status = require("../Status/StatusModel");
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
async function insertTodo(params) {
  return await todo.create(params);
}
async function updateTodo(req) {
  return await todo.update(req.body, {
    where: {
      id: req.body.id,
    },
  });
}
async function deleteTodo(req) {
  return await todo.destroy({
    where: {
      id: req.params.id,
      userId: req.user.userId,
    },
  });
}
async function getAllTodos(req) {
  return await todo.findAll({
    where: {
      userId: req.user.userId,
    },
    include: ["status", "label", "kategori"],
  });
}
// `sequelize.define` also returns the model
// console.log(Kategori === sequelize.models.Kategori); // true
module.exports = { todo, insertTodo, updateTodo, deleteTodo, getAllTodos };
