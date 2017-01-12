import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchRulesCreator } from '../../core/modules/widget/rules';
import AppComponent from './app.component';

const mapStateToProps = (state, ownProps) => {
    return {
        isLoading: state.widget.rules.isLoading
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchRules: () => dispatch(fetchRulesCreator())
    }
};

class App extends Component {
    componentWillMount() {
        return this.props.fetchRules();
    }

    render() {
        const { children, isLoading } = this.props;
        
        return (
            <AppComponent children={children} isLoading={isLoading} />
        )
    }
}

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default App;