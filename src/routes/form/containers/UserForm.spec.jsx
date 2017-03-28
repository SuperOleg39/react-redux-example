import React from 'react';
import { shallow } from 'enzyme';
import UserForm from './UserForm';

let component;

describe('Контейнер UserForm (роут /form)', () => {
    beforeAll(() => {
        component = shallow(<UserForm />);
    });

    it('содержит элемент form', () => {
        expect(component.find('form')).toHaveLength(1);
    });

    it('содержит 3 компонента ControlTextField', () => {
        expect(component.find('ControlTextField')).toHaveLength(3);
    });
});