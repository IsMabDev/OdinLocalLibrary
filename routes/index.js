var express = require("express");
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express', myVariable:'A variable to test' });
// });

// GET home page.
router.get("/", function (req, res) {
  res.redirect("/catalog");
});

// router.get("/catalog", function (req, res) {
//   res.render("catalog");
// });

module.exports = router;
