var express = require('express');
var getJSON = require("get-json");
var router = express.Router();
var $ = require('jquery');


router.get('/', function (req, res) {

    var request = req.param('request');
    var args = req.param('arguments');
    // var tries = [request.length];


    if (request.includes("select")) {

        getJSONArrayAll(request, args, function (responseArray) {
            console.log("Sent!");
            res.json(responseArray);
        });

    } else {

        getDataFromQuery(request, function (responseArray) {
            console.log(responseArray["DISPLAY"]["BTC"]);
            console.log("Sent!");
            res.json(responseArray);
        });

    }


    function getJSONArrayAll(request, args, callback) {

        getDataAll(args, function (response) {

            let responseArray = [];

            for (let i = 0; i < response.length; i++) {

                if (request.includes(response[i].id)) {

                    responseArray.push(response[i]);
                }
            }
            callback(responseArray);

        });

    }

    function getDataFromQuery(request, callback) {

        console.log("requestArray")
        console.log(request)
        let coinString = "";
        for (let i = 0; i < request.length; i++) {
            coinString = coinString + request[i]
            if (i != request.length - 1) {
                coinString = coinString + ","
            }
        }

        console.log("request")
        console.log(coinString)

        getJSON("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + coinString + "&tsyms=USD", function (error, response) {
            callback(response);
        });
    }

    function getDataAll(arg, callback) {

        let calls = 0;

        callAPI(arg, function (response) {

            if (typeof response == "undefined" && calls < 5) {
                calls++;
                callAPI(arg, response);
            } else {
                callback(response);
            }

        });
    }


    function callAPI(request, callback) {

        let coinString = "";
        for (coinName in request) {
            coinString = coinString + coinName + ","
        }

        let requestString = coinString.split(coinString.length - 1)[0];

        console.log(requestString);

        if (typeof request == "undefined") {
            getJSON("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + requestString + "&tsyms=USD", function (error, response) {
                callback(response);
            });
        } else {
            getJSON("https://api.coinmarketcap.com/v1/ticker/?limit=" + arg, function (error, response) {
                callback(response);
            });
        }
    }
});

module.exports = router;


