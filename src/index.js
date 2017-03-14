import injectTapEventPlugin from 'react-tap-event-plugin';

import render from './app';

injectTapEventPlugin();

const mountNode = document.getElementById('root');
const initialState = {
    widget: {
        isLoading: true,
    },
};

render(mountNode, initialState);
