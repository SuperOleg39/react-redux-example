import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Field from './Field';

const props = {
    name: 'Типизация'
};

let component: ShallowWrapper<any, any>;
let field: ShallowWrapper<any, any>;

describe('Компонент TextField', () => {
    beforeAll(() => {
        component = shallow(<Field {...props} />).shallow();
        field = component.find('input');
    });

    it('содержит input', () => {
        expect(field).toHaveLength(1);
    });
});