import React from 'react';
import ReactDOM from 'react-dom';

import createAppComponent from './app';

const mountNode = document.getElementById('root');
const initialState = {
    widget: {
        isLoading: true,
    },
};
const App = createAppComponent(initialState);

ReactDOM.render(
    <App />,
    mountNode,
);
