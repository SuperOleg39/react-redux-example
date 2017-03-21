import { combineReducers } from 'redux';
import { formReducer } from 'react-redux-form';

import name from './personal/name';
import lastName from './personal/lastName';
import middleName from './personal/middleName';

const initialState = {
    name: '',
    lastName: '',
    middleName: '',
};

export const user = combineReducers({
    name,
    lastName,
    middleName,
});

export const userForm = formReducer('user', initialState);