const todoModel = require("./TodoModel");
const { handleResponse } = require("../../utils/authUtils");
const TodoResource = require("./TodoResource");

function TodoInsert(req, res) {
  const id = {
    userId: req.user.userId,
  };
  const response = Object.assign(req.body, id);
  todoModel
    .insertTodo(response)
    .then(function (e) {
      return handleResponse(req, res, 201, "New todo has been created");
    })
    .catch(function (err) {
      return handleResponse(req, res, 500, err.message);
    });
}
function TodoUpdate(req, res) {
  todoModel
    .updateTodo(req)
    .then(function () {
      return handleResponse(req, res, 201, "Todo has been updated");
    })
    .catch(function (err) {
      return handleResponse(req, res, 500, err.message);
    });
}
function TodoDelete(req, res) {
  todoModel
    .deleteTodo(req)
    .then(function () {
      return handleResponse(req, res, 201, "Todo has been deleted");
    })
    .catch(function (err) {
      return handleResponse(req, res, 500, err.message);
    });
}
function TodoAll(req, res, next) {
  todoModel
    .getAllTodos(req)
    .then(function (params) {
      return handleResponse(req, res, 201, TodoResource(params));
    })
    .catch(function (err) {
      return handleResponse(req, res, 500, err.message);
    });
}
module.exports = { TodoInsert, TodoUpdate, TodoDelete, TodoAll };
