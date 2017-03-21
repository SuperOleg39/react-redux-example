import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import AppControl from './AppControl';

const mockStore = configureMockStore([thunk]);
const mockInitialState = {
    widget: {
        rules: {
            isLoading: false
        }
    }
};

let store;
let container;

describe('Контейнер AppControl', () => {
    beforeAll(() => {
        store = mockStore(mockInitialState);
        container = shallow(<AppControl store={store} />).shallow();
    });

    it('рендерит AppComponent', () => {
        expect(container.find('AppComponent')).toHaveLength(1);
    });
});