/* eslint-disable no-unused-vars */
import * as crud from '../services/tasks-crud.js';
import { taskCreator } from '../models/task.model.js';

export const Task = taskCreator();

/* export const getAllTasks = (req, res, next) => {
    crud.getAllTasks(Task)
        .then((resp) => {
            res.json(resp);
        })
        .catch((err) => next(err));
}; */

export const getAllTasks = async (req, res, next) => {
    try {
        const resp = await crud.getAllTasks(Task);
        res.json(resp);
    } catch (err) {
        next(err);
    }
};

export const getTask = (req, res, next) => {
    crud.getTask(req.params.id, Task)
        .then((resp) => {
            res.json(resp);
        })
        .catch((err) => next(err));
};

export const insertTask = (req, res) => {
    crud.insertTask(req.body, Task).then((resp) => {
        res.json(resp);
    });
};

export const updateTask = (req, res) => {
    crud.updateTask(req.params.id, req.body, Task).then((resp) => {
        res.json(resp);
    });
};

export const deleteTask = (req, res) => {
    crud.deleteTask(req.params.id, Task).then((resp) => {
        if (resp) {
            res.status(202);
            res.json(resp);
        } else {
            res.status(204);
            res.json({ message: 'Tarea no existente' });
        }
    });
};
