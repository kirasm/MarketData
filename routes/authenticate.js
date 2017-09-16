var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {

    var username = req.param("username");
    var password = req.param("password");

    res.send("goodtogo");

});


module.exports = router;
