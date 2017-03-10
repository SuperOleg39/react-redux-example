import React from 'react';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

import configureStore from './core/store';
import routes from './core/routes';

function createAppComponent(preloadState) {
    const store = configureStore(preloadState);
    const history = syncHistoryWithStore(browserHistory, store);

    const App = () => (
        <Provider store={store}>
            <Router history={history} routes={routes} />
        </Provider>
    );
    
    return App;
}

export default createAppComponent;