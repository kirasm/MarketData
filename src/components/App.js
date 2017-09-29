import React, {Component} from 'react';
import SelectCoin from './SelectCoin';
import CoinList from './CoinList';



const coinArray = [{
    coin: 'bitcoin'
}, {
    coin: 'ethereum'
}];

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            coinArray
        };
    }

    renderList(){
        const props = {coinArray: this.state.coinArray, removeCoin: this.removeCoin.bind(this)};

        return coinArray.map((coin, index) => <CoinList key={index} {...coin} />);
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

    addCoin(coin) {
        this.state.coinArray.push({coin});
        this.setState({ coinArray: this.state.coinArray });
    }

    removeCoin(taskToDelete) {
        this.state.coinArray.remove(this.state.coinArray, coin => todo.task === taskToDelete);
        this.setState({ coin: this.state.coinArray});
    }
}



