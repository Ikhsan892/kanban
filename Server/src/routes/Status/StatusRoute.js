const express = express();
const router = express.Router();

router.get("/", function (req, res, next) {
  res.send("Status");
});

module.exports = router;
