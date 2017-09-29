import React from 'react';
import style from '../../public/stylesheets/css/App.css';

export default class CoinListData extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td className={style.tData}> {this.props.coinValue} </td>
                <td className={style.tData}> {this.props.coinBoughtAt} </td>
                <td className={style.tData}> {this.props.coinDiff} </td>
                <td className={style.tData}> {this.props.coinPctDiff} </td>
            </tr>
        );
    }


}
