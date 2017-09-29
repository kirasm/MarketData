import _ from 'lodash';
import React from 'react';
import CoinListData from './CoinListData';
import style from '../../public/stylesheets/css/App.css';


export default class CoinList extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        const coinObj = {
            coinName: this.props.coinName,
            coinValue: this.props.coinValue,
            coinBoughtAt: this.props.coinBoughtAt,
            coinDiff: this.props.coinDiff,
            coinPctDiff: this.props.coinPctDiff
        };

        return (

            <table className={style.row}>
                <thead >
                    <tr >
                        <th className={style.tHeader}>{this.props.coinName}</th>
                        <th className={style.tHeader}>Current price</th>
                        <th className={style.tHeader}>Price bought at</th>
                        <th className={style.tHeader}>Difference</th>
                        <th className={style.tHeader}>Procent difference</th>
                    </tr>
                </thead>
                <tbody>
                    <CoinListData {...coinObj}/>
                </tbody>
            </table>
        );
    }
}

