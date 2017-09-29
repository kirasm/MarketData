import _ from 'lodash';
import React from 'react';
import CoinListItem from './CoinListItem';

export default class CoinList extends React.Component {
    constructor(props) {
        super(props);

    }




    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>{this.props.coin}</th>
                        <th>Current price</th>
                        <th>Price bought at</th>
                        <th>Difference</th>
                        <th>Procent difference</th>
                    </tr>
                </thead>
                <tbody>
                    <CoinListItem coin={this.props.coin}/>
                </tbody>
            </table>
        );
    }
}
