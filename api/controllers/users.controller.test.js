import * as controller from './users.controller.js';
import bcrypt from 'bcryptjs';
import { createToken } from '../services/auth.js';
import { User } from '../models/user.model.js';

jest.mock('../models/user.model.js');
jest.mock('bcryptjs');
jest.mock('../services/auth.js');

describe('Given the tasks controller', () => {
    let req;
    let res;
    let next;
    beforeEach(() => {
        req = { params: {} };
        res = {};
        res.send = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        res.status = jest.fn().mockReturnValue(res);
        next = jest.fn();
    });

    describe('When getAllUsers is triggered', () => {
        describe('And it works (promise is resolved)', () => {
            beforeEach(() => {
                User.find.mockReturnValue({
                    populate: jest.fn().mockReturnValue([]),
                });
            });
            test('Then call json', async () => {
                await controller.getAllUsers(req, res, next);
                expect(res.json).toHaveBeenCalled();
            });
        });
        describe('And it works with null (promise is resolved)', () => {
            beforeEach(() => {
                User.find.mockReturnValue({
                    populate: jest.fn().mockReturnValue(null),
                });
            });
            test('Then call json', async () => {
                await controller.getAllUsers(req, res, next);
                expect(next).toHaveBeenCalled();
            });
        });
        describe('And it not works (promise is rejected)', () => {
            beforeEach(() => {
                User.find.mockImplementation(() => {
                    throw new Error('Get All Users not possible');
                });
            });
            test('Then call next', async () => {
                await controller.getAllUsers(req, res, next);
                expect(next).toHaveBeenCalled();
            });
        });
    });
    describe('When insertUser is triggered', () => {
        describe('And it works (promise is resolved)', () => {
            beforeEach(() => {
                req.body = { name: 'Pepe', passwd: '1234' };
                bcrypt.hashSync.mockResolvedValue('encrypted1234');
                User.create.mockReturnValue({
                    name: 'Pepe',
                    passwd: 'encrypted1234',
                    id: 1,
                });
                createToken.mockReturnValue('mock_token');
            });
            test('Then call json', async () => {
                await controller.insertUser(req, res, next);
                expect(res.json).toHaveBeenCalledWith({
                    token: 'mock_token',
                    userName: 'Pepe',
                    id: 1,
                });
            });
        });
        describe('And it not works (promise is rejected)', () => {
            beforeEach(() => {
                req.body = { name: 'Pepe', passwd: '1234' };
                bcrypt.hashSync.mockReturnValue('encrypted1234');
                User.create.mockRejectedValue(new Error('Error adding user'));
                // createToken.mockReturnValue('mock_token');
            });
            test('Then call next', async () => {
                await controller.insertUser(req, res, next);
                expect(next).toHaveBeenCalled();
            });
        });
    });
});
