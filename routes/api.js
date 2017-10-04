var express = require('express');
var getJSON = require("get-json");
var router = express.Router();
var $ = require('jquery');


router.get('/', function (req, res) {

    var request = req.param('query');
    var args = req.param('arguments');
    var tries = [request.length];


    getJSONArrayAll(request, args, function (responseArray) {
        console.log("Sent!")
        res.json(responseArray);

    });


    function getJSONArrayAll(request, args, callback) {

        getDataAll(args, function (response) {

            if (request.includes("select")) {

                callback(response)

            } else {

                let responseArray = [];

                for (let i = 0; i < response.length; i++) {

                    if (request.includes(response[i].id)) {

                        responseArray.push(response[i]);
                    }
                }
                callback(responseArray);

            }

        });


    }

    function getJSONArrayFromQuery(callback) {

        let responseArray = [];

        for (let i = 0; i < request.length + 1; i++) {

            (function (index) {

                // Calls the API for each request in the array
                getDataFromQuery(request[index], args, function (response) {

                    // if (typeof response == "undefined" && tries[index] < 5) {
                    //     index--;
                    //     tries[index]++;
//
                    // } else {

                    try {

                        // Push response in returned array if id exists in requested array
                        if (request.includes(response[0].id)) {

                            console.log("Pushed");
                            responseArray.push(response);
                        }

                        // Returns response if response array is same size as requested array.
                        if (responseArray.length == request.length) {

                            // Orders returned array, by index of requested array.
                            // REMEMBER! We are working asyncronously, so we have no way of knowing which getDataFromQuery response we get first!
                            var orderedArray = []
                            responseArray.forEach(function (item) {

                                orderedArray[request.indexOf(item[0].id)] = item;

                            });


                            // for (let i = 0; i < tries.length; i++) {
                            //     if (tries[i] == 5) {
                            //         orderedArray.push(request[i]);
                            //     }
                            //     console.log("what");
                            // }


                            callback(orderedArray);

                        } else {

                            index--;

                        }
                    } catch (err) {
                    }
                    //   }
                });
            })(i);
        }

    }


    function getDataFromQuery(request, arg, callback) {

        getJSON("https://api.coinmarketcap.com/v1/ticker/" + request + "/", function (error, response) {

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


    function callAPI(arg, callback) {

        if (typeof arg == "undefined") {
            getJSON("https://api.coinmarketcap.com/v1/ticker", function (error, response) {
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


