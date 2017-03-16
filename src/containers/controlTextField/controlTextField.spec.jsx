import React from 'react';
import { mount } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import configureStore from 'core/store';
import ControlTextField from './ControlTextField';

function setup() {
    const props = {
        model: 'user.name'
    };
    const initialState = {
        user: {
            name: 'Иван'
        }
    };
    const mountWithContext = (node) => mount(node, {
        context: {
            store: configureStore(initialState),
            muiTheme: getMuiTheme(),
        },
        childContextTypes: {
            store: React.PropTypes.object.isRequired,
            muiTheme: React.PropTypes.object.isRequired,
        }
    });
    const enzymeWrapper = mountWithContext(<ControlTextField {...props} />);

    return {
        props,
        initialState,
        enzymeWrapper
    };
}

describe('Контейнер ControlTextField', () => {
    it('Успешный рендер контейнера', () => {
        const { enzymeWrapper, props, initialState } = setup();
        const textField = enzymeWrapper.find('TextField');
        const input = enzymeWrapper.find('input');
        const inputProps = input.props();

        expect(textField).toHaveLength(2);

        expect(input).toHaveLength(1);
        expect(inputProps.value).toBe(initialState.user.name);
        expect(inputProps.id).toBe(props.model);
    });
});