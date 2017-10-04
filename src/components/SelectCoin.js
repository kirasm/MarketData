import React from 'react';


class SelectCoin extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
        this.validateInput = this.validateInput.bind(this)
    }

    renderError() {
        if (!this.state.error) {
            return null;
        }

        return <div style={{color: 'red'}}>{this.state.error}</div>;
    }


    render() {

        return (

            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="Request a coin!" ref="coinInput"/>
                <button>Select</button>
                {this.renderError()}
            </form>
        );
    }

    handleCreate = (event) => {
        event.preventDefault();
        const coinInput = this.refs.coinInput;
        const coinName = coinInput.value;
        const validateInput = this.validateInput(coinName);

        if (validateInput) {

            this.setState({error: validateInput});
            return;

        } else {

            this.setState({error: null});
            this.props.addCoin(coinName);
        }

        this.refs.coinInput.value = '';


    };

    validateInput = (coinName) => {
        if (!coinName) {
            return 'Please enter a task.';
        } else if (this.props.coinName.includes(coinName)) {
            return 'Task already exists.';
        } else {
            return null;
        }
    }


}

module.exports = SelectCoin;