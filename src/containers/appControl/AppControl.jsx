import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchRulesCreator } from '../../core/modules/widget/rules';
import AppLayout from '../../components/appLayout/AppLayout';

const mapStateToProps = (state) => ({
    isLoading: state.widget.rules.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
    fetchRules: () => dispatch(fetchRulesCreator()),
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
    fetchRules: React.PropTypes.func.isRequired,
    children: React.PropTypes.node,
    isLoading: React.PropTypes.bool,
};

AppControl = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppControl);

export default AppControl;