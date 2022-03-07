import axios from 'axios';
import * as user from './user.js';
jest.mock('axios');

describe('Given the service user', () => {
    test('When login is running, axios.post should be called', () => {
        user.login();
        expect(axios.post).toHaveBeenCalled();
    });
    test('When login is running, axios.post should be called', () => {
        user.register();
        expect(axios.post).toHaveBeenCalled();
    });
});
