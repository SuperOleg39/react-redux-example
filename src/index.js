import render from './app';

const mountNode = document.getElementById('root');
const initialState = {
    widget: {
        isLoading: true,
    },
};

render(mountNode, initialState);
