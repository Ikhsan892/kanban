const express = require("express");
const router = express.Router();
const reqMiddleware = require("../../middleware/reqMiddleware");
const {
  StatusAll,
  StatusInsert,
  StatusUpdate,
  StatusDelete,
} = require("./StatusController");

router.get("/", StatusAll);
router.post("/insert", reqMiddleware, StatusInsert);
router.put("/update", reqMiddleware, StatusUpdate);
router.delete("/delete/:id", StatusDelete);

module.exports = router;
