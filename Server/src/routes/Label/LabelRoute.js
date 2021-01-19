const express = require("express");
const router = express.Router();
const reqMiddleware = require("../../middleware/reqMiddleware");
const {
  LabelAll,
  LabelInsert,
  LabelUpdate,
  LabelDelete,
} = require("./LabelController");

router.get("/", LabelAll);
router.post("/insert", reqMiddleware, LabelInsert);
router.put("/update", reqMiddleware, LabelUpdate);
router.delete("/delete/:id", LabelDelete);

module.exports = router;
