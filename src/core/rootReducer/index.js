import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import { user, userForm } from '../models/userForm/userForm.reducer';

const rootReducer = combineReducers({
    user,
    userForm,
    routing
});

export default rootReducer;