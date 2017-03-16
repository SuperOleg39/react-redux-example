import React from 'react';
import { mount } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from './TextField';

function setup() {
    const props = {
        model: 'user.name',
        value: 'Олег',
        onChange: jest.fn(),
        fieldValue: {}
    };
    const mountWithContext = (node) => mount(node, {
        context: {
            muiTheme: getMuiTheme(),
        },
        childContextTypes: {
            muiTheme: React.PropTypes.object.isRequired,
        }
    });
    const enzymeWrapper = mountWithContext(<TextField {...props} />);

    return {
        props,
        enzymeWrapper
    };
}

describe('Компонент TextField', () => {
    it('Успешный рендер компонента', () => {
        const { enzymeWrapper, props } = setup();
        const input = enzymeWrapper.find('input');
        const inputProps = input.props();

        expect(input).toHaveLength(1);
        expect(inputProps.value).toBe(props.value);
        expect(inputProps.id).toBe(props.model);
    });
});