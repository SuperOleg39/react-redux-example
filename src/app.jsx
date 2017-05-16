import 'main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import configureStore from './store';
import routes from './routes';

function render(mountNode, preloadState) {
    const store = configureStore(preloadState);
    const history = syncHistoryWithStore(browserHistory, store);

    const App = () => (
        <MuiThemeProvider>
            <Provider store={store}>
                <Router history={history} routes={routes} />
            </Provider>
        </MuiThemeProvider>
    );

    ReactDOM.render(
        <App />,
        mountNode,
    );
}

export default render;
