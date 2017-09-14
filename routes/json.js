var express = require('express');
var router = express.Router();
var path = require('path');


/* GET home page. */
router.get('/', function(req, res) {
  var pathString = __dirname + '/../data/project-data.json/';
  res.sendFile(path.join(pathString));
});


module.exports = router;
