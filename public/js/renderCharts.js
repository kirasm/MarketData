var currentPrice = "";

//
//var label = [];
//var data = [];
//var ctx = $("#myChart");
//var myChart = new Chart(ctx, {
//    type: 'line',
//    data: {
//        labels: label,
//        datasets: [{
//            lineTension: 0,
//            pointBorderColor: "rgba(75,192,192,1)",
//            pointBackgroundColor: "#fff",
//            pointBorderWidth: 1,
//            pointHoverRadius: 5,
//            pointRadius: 1,
//            fill: true,
//            data: data
//        }]
//    }
//
//});

setInterval(function () {

    getMarketdataJSON("bitcoin", function (dataArray) {

        var price = dataArray[0].price_usd;

        if(price != currentPrice) {

            //label.push(price);
            //data.push(price);
            //myChart.update();
            currentPrice = price;

        }

        var boughtat = parseInt("3501.04");
        var diff = (price - boughtat).toFixed(2);
        var procent_diff = (diff / price * 100).toFixed(2);

        var diff_modifier, procent_diff_modifier = "";

        if(diff > 0){
            diff_modifier = " + $";
        } else {
            diff_modifier = " - $";
        }
        if(procent_diff > 0) {

            procent_diff_modifier = " + / % ";

        } else {
            procent_diff_modifier = " - / % ";
        }
        document.getElementById("price1").innerHTML = "$" + price;
        document.getElementById("coinName").innerHTML = dataArray[0].id;
        document.getElementById("title").innerHTML = "Btc: $" + price;


        document.getElementById("procent").innerHTML = procent_diff_modifier + procent_diff;
        document.getElementById("diff").innerHTML = diff_modifier + diff;
        document.getElementById("boughtat").innerHTML = "$3501.04";


    });


}, 3000);

