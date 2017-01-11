import { combineReducers } from 'redux';
import { formReducer } from 'react-redux-form';

import { name, lastName, middleName } from './personal/personal.reducers';
import initialState from './userForm.initialState';

export const user = combineReducers({
    name,
    lastName,
    middleName
});

export const userForm = formReducer('user', initialState);