import React, {Component} from 'react';
import SelectCoin from './SelectCoin';
import CoinList from './CoinList';
import ListCoins from './ListCoins';
import CardList from './CardList';

const coinArray = [{}];

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            coinArray: coinArray,
            coinName: ["bitcoin","litecoin","ethereum"]

        };
    }

    render() {
        return (
            <div>
                <h1>CRYPTOCOIN</h1>
                <h2>{this.state.error}</h2>
                <SelectCoin coinArray={this.state.coinArray} coinName={this.state.coinName} addCoin={this.addCoin.bind(this)}/>
                <ListCoins getAllCoins={this.getAllCoins.bind(this)}/>
                <CardList coinArray={this.state.coinArray} />
            </div>
        );
    }

    getAllCoins = () => {

        this.getMarketDataJSON("selectAll","10", (dataArray) => {


        });

    };

    updateCoins = () => {

        let coinName = this.state.coinName;
        let coinValue = [];
        let coinBoughtAt = [];
        let coinDiff = [];
        let coinPctDiff = [];

        let coinArrayUpdated = [];
        let i = 0;

        this.getMarketDataJSON(coinName,"", (dataArray) => {

            for (i = 0; i < dataArray.length; i++) {

                coinName[i] = dataArray[i].id;
                coinValue[i] = dataArray[i].price_usd;
                coinBoughtAt[i] = "0"
                coinDiff[i] = (coinValue[i] - coinBoughtAt[i]).toFixed(2);
                coinPctDiff[i] = (coinDiff[i] / coinValue[i] * 100).toFixed(2);
                let diffModifier, pctDiffModifier = "";

                if (coinDiff > 0) {
                    diffModifier = " + $";
                } else {
                    diffModifier = " - $";
                }

                if (coinPctDiff > 0) {
                    pctDiffModifier = " + / % ";
                } else {
                    pctDiffModifier = " - / % ";
                }

                coinArrayUpdated.push({
                    coinName: coinName[i],
                    coinValue: coinValue[i],
                    coinBoughtAt: coinBoughtAt[i],
                    coinDiff: coinDiff[i],
                    coinPctDiff: coinPctDiff[i]
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

        this.updateCoins();

        this.apiCall = setInterval(() => {

            this.updateCoins();

        }, 5000);
    };

    componentWillUnmount() {
        clearInterval(this.apiCall);
    }

    addCoin(coin) {

        this.state.coinName.push(coin);
        this.setState({coinName: this.state.coinName});
    }

    getMarketDataJSON(queryStatement, args, callback) {

        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/api',
            data: {query: queryStatement, arguments: args},
            success: function (result) {
                callback(result);
            }
        });
    }
}



