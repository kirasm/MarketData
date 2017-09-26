var express = require('express');
var getJSON = require("get-json");
var router = express.Router();
var $ = require('jquery');


router.get('/', function (req, res) {

    var request = req.param('currencyID');


    getJSONArray(function (responseArray) {
        console.log("Sent!")

        res.json(responseArray);

    });

    function getJSONArray(callback) {

        let responseArray = [];

        for (let i = 0; i < request.length + 1; i++) {

            (function (index) {

                // Calls the API for each request in the array
                getData(request[index], function (response) {

                    try {

                        // Push response in returned array if id exists in requested array
                        if (request.includes(response[0].id)) {

                            console.log("Pushed");
                            responseArray.push(response);
                        }

                        // Returns response if response array is same size as requested array.
                        if (responseArray.length == request.length) {

                            // Orders returned array, by index of requested array.
                            // REMEMBER! We are working asyncronously, so we have no way of knowing which getData response we get first!
                            var orderedArray = []
                            responseArray.forEach(function (item) {

                                orderedArray[request.indexOf(item[0].id)] = item;

                            });

                            callback(orderedArray);

                        } else {

                            index--;

                        }


                    } catch (err) {
                    }


                });

            })(i);
        }

    }

    function getData(request, callback) {

        getJSON("https://api.coinmarketcap.com/v1/ticker/" + request + "/", function (error, response) {

            callback(response);

        });

    }

});


module.exports = router;


