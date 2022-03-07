import axios from 'axios';
import * as api from './api.js';
jest.mock('axios');

describe('Given the service api', () => {
    let id;
    let task;
    // let token;
    beforeAll(() => {
        id = '65656556';
        task = {};
        // token = '';
    });

    test('When getAll is running, axios.get should be called', () => {
        api.getAll();
        expect(axios.get).toHaveBeenCalled();
    });
    test('When get is running, axios.get should be called', () => {
        api.get(id);
        expect(axios.get).toHaveBeenCalled();
    });
    test('When set is running, axios.post should be called', () => {
        api.set(task);
        expect(axios.post).toHaveBeenCalled();
    });
    test('When update is running, axios.patch should be called', () => {
        api.update(task);
        expect(axios.patch).toHaveBeenCalled();
    });
    test('When remove is running, axios.delete should be called', () => {
        api.remove();
        expect(axios.delete).toHaveBeenCalled();
    });
});
