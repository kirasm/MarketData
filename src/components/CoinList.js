import _ from 'lodash';
import React from 'react';
import CoinListData from './CoinListData';
import style from '../../public/stylesheets/css/App.css';


export default class CoinList extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div>
            <table className={style.row}>
                <thead>
                <tr>
                    <th className={style.tHeader}>{this.props.coinArray.coinName}</th>
                    <th className={style.tHeader}>Current price</th>
                    <th className={style.tHeader}>Price bought at</th>
                    <th className={style.tHeader}>Difference</th>
                    <th className={style.tHeader}>Procent difference</th>
                </tr>
                </thead>
                <tbody>
                <CoinListData {...this.props.coinArray}/>
                </tbody>
            </table>
            </div>
        );
    }
}

