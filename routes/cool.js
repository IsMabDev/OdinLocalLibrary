var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("hi it's cool from cool.js");
});

module.exports = router;
