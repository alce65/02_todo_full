import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/counter-reducer";
import { tasksReducer } from "./tasks/tasks-reducers";
// import thunk from "redux-thunk";

// const [state, dispatch] = useReducer(myReducere)

/* export const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const tasksStore = createStore(
  tasksReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); */

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

// export const store = createStore(
//   combineReducers({
//     counter: counterReducer,
//     tasks: tasksReducer,
//   }),
//   composeEnhancer(applyMiddleware(thunk))
// );

const preloadedState = {
  counter: 0,
  tasks: [],
};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: tasksReducer,
  },
  preloadedState,
});
