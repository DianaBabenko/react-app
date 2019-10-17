import React from 'react';

class CountClick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            times: 0
        };
    }

    click() {
        this.setState(state => ({ times: state.times + 1}));
    }

    render() {
        return (
            <div className="countClick">
                <button onClick={() => this.click()} className="button">Click</button>
            <p>
                You click the button: {this.state.times} times
            </p>
            </div>
        );
    }
}
export default CountClick;
