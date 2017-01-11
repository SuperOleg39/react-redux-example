import { combineReducers } from 'redux';
import { modelReducer } from 'react-redux-form';

import initialState from './personal.initialState';

export const name = modelReducer('user.name', initialState.name);
export const lastName = modelReducer('user.lastName', initialState.lastName);
export const middleName = modelReducer('user.middleName', initialState.middleName);