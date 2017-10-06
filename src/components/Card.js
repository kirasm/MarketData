import React from 'react';
import CoinList from './CoinList';
import style from '../../public/stylesheets/css/App.css';


export default class Card extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        return (
            <div>
                <CoinList coinArray={this.props.coinItem}/>
            </div>
        );
    }
}
