var express = require('express');
var getJSON = require("get-json");
var router = express.Router();
var $ = require('jquery');


router.get('/', function(req, res) {

    var request = req.param('currencyID');

    console.log("Request: " + request);

    var total = request.length;
    var count = 0;
    let responseArray = [];

    getJSONArray(function (responseArray) {

        res.json(responseArray);

    });

    function getJSONArray(callback) {

        for(let i = 0; i < request.length + 1; i++){
            (function(index){

                getData(index, function (response) {

                    if(index > 1){

                        callback(responseArray);

                    } else {

                        responseArray.push(response);

                    }

                });

            })(i);
        }

    }


    function getData(index, callback){

        getJSON("https://api.coinmarketcap.com/v1/ticker/" + request[index] + "/", function(error, response) {

            callback(response);

        });

    }







});



module.exports = router;


