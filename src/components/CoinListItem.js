import React from 'react';

export default class CoinListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPrice: 0,
            priceBought: 0,
            diff: 0,
            pctDiff: 0
        };
    }

    getMarketdataJSON(id, callback) {

        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/api',
            data: {currencyID: id},
            success: function(result){

                callback(result);

            }});

    }



    componentDidMount() {
        let coin = this.props.coin;
        let currentPrice = 0;
        let price = 0;
        let boughtat = 0;
        let diff = 0;
        let procent_diff = 0;

        this.apiCall = setInterval( () =>

            this.getMarketdataJSON([coin], function (dataArray) {

            let price = dataArray[0][0].price_usd;
            if(price != currentPrice) {

                currentPrice = price;
            }

            let boughtat = parseInt("3501.04");
            let diff = (price - boughtat).toFixed(2);
            let procent_diff = (diff / price * 100).toFixed(2);

            let diff_modifier, procent_diff_modifier = "";

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
        }).then(() => {

                this.setState({
                    currentPrice: price,
                    priceBought: boughtat,
                    diff: diff,
                    pctDiff: procent_diff
                });

            }),

            7000
        );
    }

    componentWillUnmount() {
        clearInterval(this.apiCall);
    }

    render() {
        return (
            <tr>
                <td> {this.state.currentPrice} </td>
                <td> {this.state.priceBought} </td>
                <td> {this.state.diff} </td>
                <td> {this.state.pctDiff} </td>
            </tr>
        );
    }


}
