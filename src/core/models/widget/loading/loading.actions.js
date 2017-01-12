export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export const fetchRequest = () => ({
    type: FETCH_REQUEST,
});

export const fetchFailure = (error) => ({
    type: FETCH_FAILURE,
    payload: error
});

export const fetchSuccess = () => ({
    type: FETCH_SUCCESS
});