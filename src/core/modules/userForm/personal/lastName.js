import { modelReducer } from 'react-redux-form';

const initialState = '';
const lastName = modelReducer('user.lastName', initialState);

export default lastName;