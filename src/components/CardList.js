import React from 'react';
import Card from './Card';
import style from '../../public/stylesheets/css/App.css';


export default class CardList extends React.Component {
    constructor(props) {
        super(props);
    }

    renderCard() {
        return this.props.coinArray.map((coinItem,index) => <Card key={index} coinItem={coinItem} />);
    }

    render() {
        return (
            <div>
                {this.renderCard()}
            </div>
        );
    }
}
