var express = require('express');
var router = new express.Router();

router.use('/lessons', require('./lessons'));

router.get('/', function (req, res) {
  res.json({data: "Welcome!"});
})

router.get('/about', function (req, res) {
  res.json({data: "All about us!"});
})

module.exports = router;
