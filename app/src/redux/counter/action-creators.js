import { actionTypes } from "./action-types";

/* export const changeCounter = (payload) => ({
  type: actionTypes.change,
  payload,
}); */

export const incrementCounter = (payload = 1) => ({
  type: actionTypes.increment,
  payload,
});

export const decrementCounter = (payload = 1) => ({
  type: actionTypes.decrement,
  payload,
});

export const resetCounter = () => ({
  type: actionTypes.reset,
  payload: 0,
});
