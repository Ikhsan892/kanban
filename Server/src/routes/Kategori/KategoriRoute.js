const express = require("express");
const router = express.Router();
const reqMiddleware = require("../../middleware/reqMiddleware");
const {
  KategoriAll,
  KategoriInsert,
  KategoriUpdate,
  KategoriDelete,
} = require("./KategoriController");

router.get("/", KategoriAll);
router.post("/insert", reqMiddleware, KategoriInsert);
router.put("/update", reqMiddleware, KategoriUpdate);
router.delete("/delete/:id", KategoriDelete);

module.exports = router;
