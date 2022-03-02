import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/counter-reducer";
import { tasksReducer } from "./tasks/tasks-reducers";
import { userReducer } from "./user/user.reducer";
// import thunk from "redux-thunk";

const preloadedState = {
  counter: 0,
  tasks: [],
};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: tasksReducer,
    user: userReducer,
  },
  preloadedState,
});
