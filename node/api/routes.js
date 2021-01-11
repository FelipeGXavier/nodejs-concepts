const express = require("express");
const router = express.Router();

router.use(function middleware(req, res, next) {
  console.log(Date.now());
  next();
});


router.get("/", (req, res) => {
  res.json({birds: []});
});

module.exports = router;


