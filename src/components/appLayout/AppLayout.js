import React, {  PropTypes } from 'react';
import { Link } from 'react-router';

const AppComponent = (props) => {
    const { children, isLoading } = props;

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
};

AppComponent.propTypes = {
    children: React.PropTypes.node,
    isLoading: React.PropTypes.bool
};

export default AppComponent;