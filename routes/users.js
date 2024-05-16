var express = require("express");
var router = express.Router();
var coolRouter = require("./cool");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.use("/cool", coolRouter);
// router.get('/cool',(req,res)=>
// {
//   res.send('you are cool minzo')
// })
module.exports = router;
