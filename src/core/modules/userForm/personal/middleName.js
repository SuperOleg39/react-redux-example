import { modelReducer } from 'react-redux-form';

const initialState = '';
const middleName = modelReducer('user.middleName', initialState);

export default middleName;