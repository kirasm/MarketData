**
 * Created by Rasmus-Laptop on 25/09/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';


class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <p>Hello, Universe</p>
        );
    }
}
ReactDOM.render(
    <Greeting/>,
    document.getElementById('container')
);