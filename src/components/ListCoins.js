import React from 'react';


class ListCoins extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (

            <button onClick={this.handleCreate.bind(this)}>All</button>

        );
    }

    handleCreate = (event) => {
        event.preventDefault();
        this.props.getAllCoins();
    };


}

module.exports = ListCoins;