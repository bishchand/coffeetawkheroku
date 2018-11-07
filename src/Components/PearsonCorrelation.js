import React, { Component } from 'react';
import calculatePearsonCorrelation from './../Pearson.js';

class PearsonCorrelation extends Component {
    render() {
        return (
            <div>
                <div>{calculatePearsonCorrelation(this.props.var1, this.props.var2)}</div>
            </div>
        );
    }
}

export default PearsonCorrelation;