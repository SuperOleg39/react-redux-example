import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

import configureStore from './core/store';
import routes from './core/routes';

function render(mountNode, preloadState) {
    const store = configureStore(preloadState);
    const history = syncHistoryWithStore(browserHistory, store);

    const App = (props) => (
        <Provider store={store}>
            <Router history={history} routes={routes} />
        </Provider>
    );

    ReactDOM.render(
        <App />,
        mountNode,
    );
}

export default render;
