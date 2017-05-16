import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import CircularProgress from 'material-ui/CircularProgress';
import { white } from 'material-ui/styles/colors';

const Nav = () => (
    <IconMenu
        iconButtonElement={<IconButton><MenuIcon color={white} /></IconButton>}
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
    >
        <MenuItem
            containerElement={<Link to="/" />}
            primaryText="Home"
        />
        <MenuItem
            containerElement={<Link to="/form" />}
            primaryText="Form"
        />
        <MenuItem
            containerElement={<Link to="/demo" />}
            primaryText="Demo"
        />
        <MenuItem
            containerElement={<Link to="/123" />}
            primaryText="fail"
        />
    </IconMenu>
);

const AppComponent = (props) => {
    const { children, isLoading } = props;

    let Content;

    if (isLoading) {
        Content = () => <CircularProgress />;
    } else {
        Content = () => <div>{children}</div>;
    }

    return (
        <div>
            <AppBar
                title="Widget"
                iconElementLeft={<Nav />}
            />
            <Content />
        </div>
    );
};

AppComponent.propTypes = {
    children: PropTypes.node,
    isLoading: PropTypes.bool,
};

export default AppComponent;