var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/APIData', function(req, res) {
    $.getJSON("https://api.coinmarketcap.com/v1/ticker/", function( data ) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(data));
    });

});

module.exports = router;
