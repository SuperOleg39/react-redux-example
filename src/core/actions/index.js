export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_LAST_NAME = 'CHANGE_LAST_NAME';
export const CHANGE_MIDDLE_NAME = 'CHANGE_MIDDLE_NAME';

export const changeName = val => ({
    type: CHANGE_NAME,
    payload: val
});

export const changeLastName = val => ({
    type: CHANGE_LAST_NAME,
    payload: val
});

export const changeMiddleName = val => ({
    type: CHANGE_MIDDLE_NAME,
    payload: val
});