const express = express();
const router = express.Router();

router.get("/", function (req, res, next) {
  res.send("Label");
});

module.exports = router;
