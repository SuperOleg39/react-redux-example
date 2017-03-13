import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchRulesCreator } from '../../core/modules/widget/rules';
import AppLayout from '../../components/appLayout/AppLayout';

const mapStateToProps = (state) => ({ isLoading: state.widget.rules.isLoading });

const mapDispatchToProps = (dispatch) => ({ fetchRules: () => dispatch(fetchRulesCreator()) });

class App extends Component {
    componentWillMount() {
        return this.props.fetchRules();
    }

    render() {
        const { children, isLoading } = this.props;

        return (
            <AppLayout children={children} isLoading={isLoading} />
        )
    }
}

App.propTypes = {
    fetchRules: React.PropTypes.func.isRequired,
    children: React.PropTypes.node,
    isLoading: React.PropTypes.bool
};

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default App;