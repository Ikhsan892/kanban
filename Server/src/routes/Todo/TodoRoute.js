const express = require("express");
const router = express.Router();
const reqMiddleware = require("../../middleware/reqMiddleware");
const {
  TodoInsert,
  TodoUpdate,
  TodoDelete,
  TodoAll,
} = require("./TodoController");

router.get("/", TodoAll);
router.post("/insert", reqMiddleware, TodoInsert);
router.put("/update", reqMiddleware, TodoUpdate);
router.delete("/delete/:id", TodoDelete);

module.exports = router;
