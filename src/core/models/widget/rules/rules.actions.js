export const FETCH_RULES_REQUEST = 'FETCH_RULES_REQUEST';
export const FETCH_RULES_FAILURE = 'FETCH_RULES_FAILURE';
export const FETCH_RULES_SUCCESS = 'FETCH_RULES_SUCCESS';

export const fetchRules = () => (dispatch) => getRules(dispatch);

export const fetchRulesRequest = () => ({
    type: FETCH_RULES_REQUEST
});

export const fetchRulesFailure = (error) => ({
    type: FETCH_RULES_FAILURE,
    payload: error
});

export const fetchRulesSuccess = (data) => ({
    type: FETCH_RULES_SUCCESS,
    payload: data
});

function getRules(dispatch) {
    dispatch(fetchRulesRequest());

    return fetch('./rules.json')
        .then(response => response.json())
        .then(json => dispatch(fetchRulesSuccess(json)))
        .catch(error => dispatch(fetchRulesFailure(error)));
}