import getRules from 'services/rulesService';

const FETCH_REQUEST = 'widget/rules/FETCH_REQUEST';
const FETCH_FAILURE = 'widget/rules/FETCH_FAILURE';
const FETCH_SUCCESS = 'widget/rules/FETCH_SUCCESS';

const initialState = {
    isLoading: false,
    error: false,
    data: [],
};

export default function rules(state = initialState, action = {}) {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };
        default:
            return state;
    }
}

export function fetchRulesRequest() {
    return { type: FETCH_REQUEST };
}

export function fetchRulesFailure(error) {
    return {
        type: FETCH_FAILURE,
        payload: error,
    };
}

export function fetchRulesSuccess(data) {
    return {
        type: FETCH_SUCCESS,
        payload: data,
    };
}

export function fetchRules() {
    return (dispatch) => {
        dispatch(fetchRulesRequest());

        return getRules()
            .then((response) => dispatch(fetchRulesSuccess(response.data)))
            .catch((error) => dispatch(fetchRulesFailure(error)));
    };
}

export const types = {
    FETCH_REQUEST,
    FETCH_FAILURE,
    FETCH_SUCCESS,
};