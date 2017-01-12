import { FETCH_RULES_REQUEST, FETCH_RULES_FAILURE, FETCH_RULES_SUCCESS } from './rules.actions';
import initialState from './rules.initialState';

export const rules = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RULES_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_RULES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case FETCH_RULES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            };
        default:
            return state;
    }
};