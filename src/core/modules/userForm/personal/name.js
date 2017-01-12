import { modelReducer } from 'react-redux-form';

const initialState = '';
const name = modelReducer('user.name', initialState);

export default name;