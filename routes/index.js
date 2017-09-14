var express = require('express');
var router = express.Router();
var path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  var pathString = __dirname + '/../index.html/';
  res.sendFile(path.join(pathString));
});


module.exports = router;
