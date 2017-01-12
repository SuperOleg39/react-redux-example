import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchRules } from '../../core/models/widget/rules/rules.actions';
import AppComponent from './app.component';

const mapStateToProps = (state, ownProps) => {
    return {
        isLoading: state.widget.rules.isLoading
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchRules: () => dispatch(fetchRules())
    }
};

class App extends Component {
    componentWillMount() {
        this.props.fetchRules();
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