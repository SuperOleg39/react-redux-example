import React from 'react';
import { shallow } from 'enzyme';
import TextField from './TextField';

const props = {
    model: 'user.name',
    onChange: jest.fn(),
    fieldValue: { }
};

let component;
let textField;

describe('Компонент TextField', () => {
    beforeAll(() => {
        component = shallow(<TextField {...props} />).shallow();
        textField = component.find('TextField');
    });

    it('рендерит компонент TextField (Material UI)', () => {
        expect(textField).toHaveLength(1);
    });
});