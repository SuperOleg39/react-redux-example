import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import nock from 'nock';

import reducer, * as actions from './index';

jest.mock('core/services/rulesService', () => {
    const axios = require('axios');
    return () => axios.get('http://example.com/info.json');
});

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

axios.defaults.adapter = httpAdapter;

describe('Ducks модуль Правила валидации', () => {
    it('Async action creator fetchRules создает action FETCH_RULES_SUCCESS по успешному завершению запроса', () => {
        nock('http://example.com/')
            .get('/info.json')
            .reply(200, [1]);

        const expectedActions = [
            { type: actions.types.FETCH_RULES_REQUEST },
            { type: actions.types.FETCH_RULES_SUCCESS, payload: [1] }
        ];
        const store = mockStore({ data: [] });

        return store.dispatch(actions.fetchRules())
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });

    it('Async action creator fetchRules создает action FETCH_RULES_FAILURE при получении ошибки от сервера', () => {
        nock('http://example.com/')
            .get('/info.json')
            .reply(500, { message: 'Произошла ошибка' });

        const expectedActions = [
            { type: actions.types.FETCH_RULES_REQUEST },
            { type: actions.types.FETCH_RULES_FAILURE, payload: { message: 'Произошла ошибка' } }
        ];
        const store = mockStore({ data: [] });

        return store.dispatch(actions.fetchRules())
            .catch(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });

    describe('Reducer', () => {
        const initialState = {
            isLoading: false,
            error: false,
            data: [],
        };

        it('Возвращает initial state', () => {
            expect(reducer(undefined, {})).toEqual(initialState);
        });

        it('Обрабатывает FETCH_RULES_REQUEST', () => {
            expect(reducer(initialState, {
                type: actions.types.FETCH_RULES_REQUEST
            })).toEqual({
                isLoading: true,
                error: false,
                data: [],
            });
        });

        it('Обрабатывает FETCH_RULES_SUCCESS', () => {
            expect(reducer(initialState, {
                type: actions.types.FETCH_RULES_SUCCESS,
                payload: [1]
            })).toEqual({
                isLoading: false,
                error: false,
                data: [1],
            });
        });

        it('Обрабатывает FETCH_RULES_FAILURE', () => {
            expect(reducer(initialState, {
                type: actions.types.FETCH_RULES_FAILURE,
                payload: { message: 'Произошла ошибка' }
            })).toEqual({
                isLoading: false,
                error: { message: 'Произошла ошибка' },
                data: [],
            });
        });
    });
});