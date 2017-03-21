import getRules from 'services/rulesService';

const FETCH_RULES_REQUEST = 'FETCH_RULES_REQUEST';
const FETCH_RULES_FAILURE = 'FETCH_RULES_FAILURE';
const FETCH_RULES_SUCCESS = 'FETCH_RULES_SUCCESS';

const initialState = {
    isLoading: false,
    error: false,
    data: [],
};

const rules = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RULES_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_RULES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case FETCH_RULES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };
        default:
            return state;
    }
};

export default rules;

export const fetchRulesRequest = () => ({
    type: FETCH_RULES_REQUEST,
});

export const fetchRulesFailure = (error) => ({
    type: FETCH_RULES_FAILURE,
    payload: error,
});

export const fetchRulesSuccess = (data) => ({
    type: FETCH_RULES_SUCCESS,
    payload: data,
});

export function fetchRules() {
    return (dispatch) => {
        dispatch(fetchRulesRequest());

        return getRules()
            .then((response) => dispatch(fetchRulesSuccess(response.data)))
            .catch((error) => dispatch(fetchRulesFailure(error)));
    };
}

export const types = {
    FETCH_RULES_REQUEST,
    FETCH_RULES_FAILURE,
    FETCH_RULES_SUCCESS
};