import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import { user, userForm } from '../models/userForm/userForm.reducer';
import widget from '../models/widget/widget.reducer';

const rootReducer = combineReducers({
    routing,
    user,
    userForm,
    widget,
});

export default rootReducer;