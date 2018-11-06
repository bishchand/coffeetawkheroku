import React, { Component } from 'react';

class TableOfValues extends Component {
    render() {
        return (
            <div>
                <p>{this.props.label}</p>
                <div className="data-table-box" dangerouslySetInnerHTML={{__html: this.props.values.join('<br />')}}>
                </div>
            </div>
        );
    }
}

export default TableOfValues;