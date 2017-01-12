import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import { user, userForm } from '../modules/userForm';
import widget from '../modules/widget';

const rootReducer = combineReducers({
    routing,
    user,
    userForm,
    widget,
});

export default rootReducer;