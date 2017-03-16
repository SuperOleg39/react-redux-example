import { modelReducer } from 'react-redux-form';

const initialState = 'Олег';
const name = modelReducer('user.name', initialState);

export default name;