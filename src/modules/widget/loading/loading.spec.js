import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import nock from 'nock';

import reducer, * as actions from './index';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

axios.defaults.adapter = httpAdapter;

describe('Ducks модуль Cтатус загрузки виджета', () => {
    it('Async action creator fetchData создает action FETCH_SUCCESS по успешному завершению запроса', () => {
        nock('http://example.com/')
            .get('/info')
            .reply(200, { data: 2 });

        const expectedActions = [
            { type: actions.types.FETCH_REQUEST },
            { type: actions.types.FETCH_SUCCESS, payload: { data: 2 } }
        ];
        const store = mockStore({ data: 1 });

        return store.dispatch(actions.fetchData())
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });

    it('Async action creator fetchData создает action FETCH_FAILURE при получении ошибки от сервера', () => {
        nock('http://example.com/')
            .get('/info')
            .reply(500, { message: 'Произошла ошибка' });

        const expectedActions = [
            { type: actions.types.FETCH_REQUEST },
            { type: actions.types.FETCH_FAILURE, payload: { message: 'Произошла ошибка' } }
        ];
        const store = mockStore({ data: 1 });

        return store.dispatch(actions.fetchData())
            .catch(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });

    describe('Reducer', () => {
        it('Возвращает initial state', () => {
            expect(reducer(undefined, {})).toEqual(false);
        });

        it('Обрабатывает FETCH_REQUEST', () => {
            expect(reducer(false, {
                type: actions.types.FETCH_REQUEST
            })).toEqual(true);
        });

        it('Обрабатывает FETCH_SUCCESS', () => {
            expect(reducer(true, {
                type: actions.types.FETCH_SUCCESS,
                payload: { data: 2 }
            })).toEqual(false);
        });

        it('Обрабатывает FETCH_FAILURE', () => {
            expect(reducer(true, {
                type: actions.types.FETCH_FAILURE,
                payload: { message: 'Произошла ошибка' }
            })).toEqual(false);
        });
    });
});