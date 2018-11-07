import React, { Component } from 'react';

class HotOrCold extends Component {

    handleValueChange = e => {
        this.props.onChange(e);
    }

    render() {
        return (
            //displaying the values that user inputs
            //setting parameters for acceptable values - 1 and 2 which corresponds to hot or cold
            <label>
                {this.props.label}:
                <input style={{width: 150}} type="number" min="0" max="1" value={this.props.value} name={this.props.name} onChange={this.handleValueChange} />
            </label>

        );
    }
}

export default HotOrCold;