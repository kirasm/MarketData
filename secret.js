

function getMarketdata(idArray) {



    // DataArray of coin dataobjects
    var dataArray = [];

    for(var id of idArray){

        getMarketdataJSON(id);

    }

    function getMarketdataJSON(id) {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/APIData',
           // data: {currencyID: id},
            success: function(result){

                dataArray.push(result);

            }});
    }

    console.log(dataArray);


  // $.when(getMarketdataJSON()).done(function(a1){

  //     document.getElementById("number1").innerHTML = dataArray[0].id;

  // });









    
}

