import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchRules } from 'modules/widget/rules';
import AppLayout from 'layouts/appLayout/AppLayout';

const mapStateToProps = (state) => ({
    isLoading: state.widget.rules.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
    fetchRules: () => dispatch(fetchRules()),
});

class AppControl extends Component {
    componentWillMount() {
        return this.props.fetchRules();
    }

    render() {
        const { children, isLoading } = this.props;

        return (
            <AppLayout isLoading={isLoading}>{children}</AppLayout>
        );
    }
}

AppControl.propTypes = {
    fetchRules: PropTypes.func.isRequired,
    children: PropTypes.node,
    isLoading: PropTypes.bool,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppControl);