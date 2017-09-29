



async function getMarketdataJSON(id, callback) {

        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/api',
            data: {currencyID: id},
            success: function(result){

                callback(result);

            }});

}



