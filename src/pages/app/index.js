import React from 'react';
import { connect } from 'react-redux';
import { changeName, changeLastName, changeMiddleName } from '../../core/actions';
import AppComponent from './app.component';

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.name,
        lastName: state.lastName,
        middleName: state.middleName
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChangeName: (val) => dispatch(changeName(val)),
        onChangeLastName: (val) => dispatch(changeLastName(val)),
        onChangeMiddleName: (val) => dispatch(changeMiddleName(val))
    }
};

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent);

export default App;