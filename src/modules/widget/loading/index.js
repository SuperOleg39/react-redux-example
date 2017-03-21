import axios from 'axios';

const FETCH_REQUEST = 'widget/loading/FETCH_REQUEST';
const FETCH_FAILURE = 'widget/loading/FETCH_FAILURE';
const FETCH_SUCCESS = 'widget/loading/FETCH_SUCCESS';

const initialState = false;

export default function isLoading(state = initialState, action = {}) {
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
}

export function fetchRequest() {
    return { type: FETCH_REQUEST };
}

export function fetchFailure(error) {
    return {
        type: FETCH_FAILURE,
        payload: error,
    };
}

export function fetchSuccess(data) {
    return {
        type: FETCH_SUCCESS,
        payload: data,
    };
}

export function fetchData() {
    return (dispatch) => {
        dispatch(fetchRequest());

        return axios.get('http://example.com/info')
            .then((response) => dispatch(fetchSuccess(response.data)))
            .catch((error) => dispatch(fetchFailure(error)));
    };
}

export const types = {
    FETCH_REQUEST,
    FETCH_FAILURE,
    FETCH_SUCCESS,
};