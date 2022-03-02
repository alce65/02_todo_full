import { actionTypes } from "./action-types";
import * as api from "../../services/api";

export const loadTasks = (token) => {
  return (dispatch) => {
    api.getAll(token).then((resp) => {
      dispatch({
        type: actionTypes.loadTasks,
        payload: resp.data,
      });
    });
  };
};

export const createTask = (task) => {
  return (dispatch) => {
    api.set(task).then((resp) => {
      dispatch({
        type: actionTypes.createTask,
        payload: resp.data,
      });
    });
  };
};

export const removeTask = (task, token) => {
  return (dispatch) => {
    api.remove(task._id, token).then((resp) => {
      console.log(task);
      if (resp.status === 202) {
        dispatch({
          type: actionTypes.removeTask,
          payload: task,
        });
      }
    });
  };
};

export const updateTask = (task, token) => {
  return (dispatch) => {
    api.update(task, token).then((resp) => {
      dispatch({
        type: actionTypes.updateTask,
        payload: resp.data,
      });
    });
  };
};
