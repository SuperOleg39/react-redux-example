import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

let component;

describe('Компонент NotFound (роут /*)', () => {
    beforeAll(() => {
        component = shallow(<NotFound />);
    });

    it('содержит элемент h1 c текстом "404 page not found"', () => {
        const header = component.find('h1');

        expect(header).toHaveLength(1);
        expect(header.text()).toBe('404 page not found');
    });
});
