var express = require('express');
var router = express.Router();
var $ = require("jquery");


router.get('/', function(req, res) {

    $.getJSON("https://api.coinmarketcap.com/v1/ticker/", function(data) {
        res.json(data);
    });

});

module.exports = router;
