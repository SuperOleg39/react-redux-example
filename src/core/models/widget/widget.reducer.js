import { combineReducers } from 'redux';

import { isLoading } from './loading/loading.reducers';
import { rules } from './rules/rules.reducers';

const widget = combineReducers({
    isLoading,
    rules
});

export default widget;