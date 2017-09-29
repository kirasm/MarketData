import React, {Component} from 'react';
import SelectCoin from './SelectCoin';
import CoinList from './CoinList';


const coinArray = [{

}];



export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            coinArray: coinArray,
            coinName: ["bitcoin", "ethereum"]
        };

    }

    renderList() {

        return coinArray.map((coinArray, index) => <CoinList key={index} {...coinArray} />);
    }

    render() {
        return (
            <div>
                <h1>CRYPTOCOIN</h1>
                <SelectCoin coins={this.state.coinArray} addCoin={this.addCoin.bind(this)}/>
                {this.renderList()}
            </div>
        );
    }

    updateCoins = () => {

        let coinName = this.state.coinName;
        let coinValue = [];
        let coinBoughtAt = [];
        let coinDiff = [];
        let coinPctDiff = [];

        let coinArrayUpdated = [];
        let j = 0;

        this.getMarketDataJSON(coinName, (dataArray) => {

            for (j = 0; j < dataArray.length; j++) {

                coinValue[j] = dataArray[j][0].price_usd;
                coinBoughtAt[j] = parseInt("3501.04");
                coinDiff[j] = (coinValue[j] - coinBoughtAt[j]).toFixed(2);
                coinPctDiff[j] = (coinDiff[j] / coinValue[j] * 100).toFixed(2);
                let diff_modifier, procent_diff_modifier = "";
//
                if (coinDiff > 0) {
                    diff_modifier = " + $";
                } else {
                    diff_modifier = " - $";
                }
//
                if (coinPctDiff > 0) {
                    procent_diff_modifier = " + / % ";
                } else {
                    procent_diff_modifier = " - / % ";
                }

                coinArrayUpdated.push({
                    coinName: coinName[j],
                    coinValue: coinValue[j],
                    coinBoughtAt: coinBoughtAt[j],
                    coinDiff: coinDiff[j],
                    coinPctDiff: coinPctDiff[j]
                });

            }

            for (let i = 0; i < coinArrayUpdated.length; i++) {
                this.state.coinArray[i] = coinArrayUpdated[i];
            }

            this.setState({

                coinArray: this.state.coinArray

            });

        });

    };

    componentDidMount = () => {

        console.log(this.state.coinName);

        this.updateCoins();

        this.apiCall = setInterval(() => {

            this.updateCoins();

        }, 3000);
    };

    componentWillUnmount() {
        clearInterval(this.apiCall);
    }

    addCoin(coin) {

       this.state.coinName.push(coin);
       this.setState({coinName: this.state.coinName});
    }

    getMarketDataJSON(id, callback) {

        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/api',
            data: {currencyID: id},
            success: function (result) {

                callback(result);

            }
        });
    }
}



