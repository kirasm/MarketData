import React from 'react';

export default class TodosListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    renderTaskSection() {

        const { coin} = this.props;

        const taskStyle = {
            cursor: 'pointer'
        };


        return (
            <td style={taskStyle}>
                {coin}
            </td>
        );
    }



    render() {
        return (
            <tr>
                {this.renderTaskSection()}
            </tr>
        );
    }


}
