import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ControlTextField from './ControlTextField';

const mockStore = configureMockStore([thunk]);
const mockInitialState = {
    user: {
        name: 'Иван'
    },
};
const props = {
    model: 'user.name'
};

let store;
let container;
let input;

describe('Контейнер ControlTextField', () => {
    beforeAll(() => {
        store = mockStore(mockInitialState);

        const mountWithContext = (node) => mount(node, {
            context: {
                store,
                muiTheme: getMuiTheme()
            },
            childContextTypes: {
                muiTheme: PropTypes.object.isRequired,
                store: PropTypes.object.isRequired
            }
        });

        container = mountWithContext(<ControlTextField {...props} />);
        input = container.find('input');
    });

    it('содержит Control контейнер (react-redux-form)', () => {
        expect(container.find('Control')).toHaveLength(1);
    });

    it('содержит TextField компоненты (нашего приложения и Material UI)', () => {
        expect(container.find('TextField')).toHaveLength(2);
    });

    it('содержит элемент input', () => {
        expect(input).toHaveLength(1);
    });

    describe('Input', () => {
        it('отображает необходимый value', () => {
            expect(input.props().value).toBe(mockInitialState.user.name);
        });

        it('имеет необходимый id', () => {
            expect(input.props().id).toBe(props.model);
        });
    });
});
