import React, { Component } from 'react';
import { Link } from 'react-router';

class AppComponent extends Component {
    render() {
        const { children, isLoading } = this.props;

        return (
            <div>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/form">Form</Link></div>
                <div><Link to="/123">fail</Link></div>

                { 
                    !isLoading
                    ? <div>{children}</div>
                    : '...'
                }
            </div>
        )
    }
}

export default AppComponent;