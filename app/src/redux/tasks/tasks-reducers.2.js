import { actionTypes } from "./action-types";

const initialState = {
  tasks: [],
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.loadTasks:
      return { ...state, tasks: [...action.payload] };
    case actionTypes.createTask:
      console.log(state);
      return { ...state, tasks: [...state.tasks, action.payload] };
    case actionTypes.removeTask:
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.updateTask:
      return {
        ...state,
        tasks: state.tasks.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    default:
      return state;
  }
};
