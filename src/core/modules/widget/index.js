import { combineReducers } from 'redux';

import isLoading from './loading';
import rules from './rules';

const widget = combineReducers({
    isLoading,
    rules
});

export default widget;