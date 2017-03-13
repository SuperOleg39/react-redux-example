import axios from 'axios';

const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_FAILURE = 'FETCH_FAILURE';
const FETCH_SUCCESS = 'FETCH_SUCCESS';

const initialState = false;

const isLoading = (state = initialState, action) => {
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

export default isLoading;

export const fetchRequest = () => ({
    type: FETCH_REQUEST,
});

export const fetchFailure = (error) => ({
    type: FETCH_FAILURE,
    payload: error,
});

export const fetchSuccess = (data) => ({
    type: FETCH_SUCCESS,
    payload: data,
});

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