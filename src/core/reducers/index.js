import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { CHANGE_NAME, CHANGE_LAST_NAME, CHANGE_MIDDLE_NAME } from '../actions';

// const initialState = 'Oleg';

const name = (state = 'Oleg', action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return action.payload;
        default:
            return state;
    }
};

const lastName = (state = 'Drapeza', action) => {
    switch (action.type) {
        case CHANGE_LAST_NAME:
            return action.payload;
        default:
            return state;
    }
};

const middleName = (state = 'Nikolaevich', action) => {
    switch (action.type) {
        case CHANGE_MIDDLE_NAME:
            return action.payload;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    name,
    lastName,
    middleName,
    routing
});

export default rootReducer;