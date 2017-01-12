import { FETCH_REQUEST, FETCH_FAILURE, FETCH_SUCCESS } from './loading.actions';
import initialState from './loading.initialState';

export const isLoading = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return true;
        case FETCH_FAILURE:
            return false;
        case FETCH_SUCCESS:
            return false;
        default:
            return state;
    }
};