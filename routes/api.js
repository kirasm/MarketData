var express = require('express');
var getJSON = require("get-json");
var router = express.Router();



router.get('/', function(req, res) {

    var request = req.param('currencyID');

            getJSON("https://api.coinmarketcap.com/v1/ticker/" + request + "/", function(error, response) {

                res.json(response);

            });

});


module.exports = router;
