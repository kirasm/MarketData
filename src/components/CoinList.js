import _ from 'lodash';
import React from 'react';
import CoinListItem from './CoinListItem';

export default class CoinList extends React.Component {
    renderItems() {
        const props = _.omit(this.props, 'coinArray');

        return _.map(this.props.coinArray, (coin, index) => <CoinListItem key={index} {...coin} {...props} />);
    }

    render() {
        return (
            <table>
                <tbody>
                {this.renderItems()}
                </tbody>
            </table>
        );
    }
}
