import React, { Component } from 'react';


class MinutesTaken extends Component {

    handleValueChange = e => {
        this.props.onChange(e);
    }

    render() {
        return (
            //recording the amount of minutes taken for each drink order
            <label>
                {this.props.label}:
                <input style={{width: 150}} type="number" min= "1"  value={this.props.value} name={this.props.name} onChange={this.handleValueChange} />
            </label>

        );
    }
}

export default MinutesTaken;