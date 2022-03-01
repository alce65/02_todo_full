import { actionTypes } from "./action-types";

const initialState = 0;

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.increment:
      return state + action.payload;
    case actionTypes.decrement:
      return state - action.payload;
    case actionTypes.reset:
      return action.payload;
    default:
      return state;
  }
}
