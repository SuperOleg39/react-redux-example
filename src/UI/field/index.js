import React, { Component, PropTypes } from 'react';

class Field extends Component {
    
    handleChange = (e) => {
        this.props.onChange(e.target.value);
    };
    
    render() {
        return (
            <input type="text" value={this.props.model} onChange={this.handleChange} />
        )
    }
}

export default Field;