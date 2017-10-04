import React, {Component} from 'react';
import SelectCoin from './SelectCoin';
import CoinList from './CoinList';
import ListCoins from './ListCoins';

const coinArray = [{}];

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            coinArray: coinArray,
            coinName: [ ]

        };
    }

    renderList() {
        return coinArray.map((coinArray, index) => <CoinList key={index} {...coinArray} />);
    }

    render() {
        return (
            <div>
                <h1>CRYPTOCOIN</h1>
                <h2>{this.state.error}</h2>
                <SelectCoin coinArray={this.state.coinArray} coinName={this.state.coinName} addCoin={this.addCoin.bind(this)}/>
                <ListCoins getAllCoins={this.getAllCoins.bind(this)}/>
                {this.renderList()}
            </div>
        );
    }

    getAllCoins = () => {

        this.getMarketDataJSON("selectAll","10", (dataArray) => {


        });

    };

    updateCoins = () => {

        let coinName = [];
        let coinValue = [];
        let coinBoughtAt = [];
        let coinDiff = [];
        let coinPctDiff = [];

        let coinArrayUpdated = [];
        let j = 0;


        this.getMarketDataJSON("selectAll","10", (dataArray) => {
            console.log(dataArray);


            for (j = 0; j < dataArray.length; j++) {

                coinName[j] = dataArray[j].id;
                coinValue[j] = dataArray[j].price_usd;
                coinBoughtAt[j] = "0"
                coinDiff[j] = (coinValue[j] - coinBoughtAt[j]).toFixed(2);
                coinPctDiff[j] = (coinDiff[j] / coinValue[j] * 100).toFixed(2);
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



