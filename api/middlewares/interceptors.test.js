import * as interceptors from './interceptors.js';
import { verifyToken } from '../services/auth.js';
import { Task } from '../models/task.model.js';

jest.mock('../services/auth.js');
jest.mock('../models/task.model.js');

describe('Given a route intercepted by loginRequired', () => {
    let req;
    let res;
    let next;
    let tokenError;
    beforeEach(() => {
        tokenError = new Error('token missing or invalid');
        tokenError.status = 401;
        req = { params: {} };
        res = {};
        req.get = jest.fn();
        res.send = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        res.status = jest.fn().mockReturnValue(res);
        next = jest.fn();
    });
    describe('When authorization token is present', () => {
        describe('And token is valid', () => {
            test('Then call next', () => {
                req.get.mockReturnValue('bearer token');
                verifyToken.mockReturnValue({});
                interceptors.loginRequired(req, res, next);
                expect(next).toHaveBeenCalledWith();
            });
        });
        describe('And token is not valid', () => {
            test('Then call next with error', () => {
                req.get.mockReturnValue('bearer token');
                verifyToken.mockReturnValue('bad token');
                interceptors.loginRequired(req, res, next);
                expect(next).toHaveBeenCalledWith(tokenError);
            });
        });
    });
    describe('When authorization token is not present', () => {
        test('Then call next with error', () => {
            req.get.mockReturnValue('');
            interceptors.loginRequired(req, res, next);
            expect(next).toHaveBeenCalledWith(tokenError);
        });
    });
});

describe('Given a route intercepted by userRequired', () => {
    let req;
    let res;
    let next;
    let userError;
    beforeEach(() => {
        userError = new Error('not authorized user');
        userError.status = 401;
        req = { params: {}, tokenPayload: {} };
        res = {};
        next = jest.fn();
    });
    beforeEach(() => {
        Task.findById.mockReturnValue({
            responsible: 1,
        });
    });
    describe('When token user is the user of the task', () => {
        test('Then call next', async () => {
            req.tokenPayload.id = '1';
            await interceptors.userRequired(req, res, next);
            expect(next).toHaveBeenCalledWith();
        });
    });
    describe('When token user is the user of the task', () => {
        test('Then call next with error', async () => {
            req.tokenPayload.id = '2';
            await interceptors.userRequired(req, res, next);
            expect(next).toHaveBeenCalledWith(userError);
        });
    });
});
