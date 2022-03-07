// test-utils.js
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// Import your own reducer
import { counterReducer } from './counter/counter-reducer';
import { tasksReducer } from './tasks/tasks-reducers';
import { userReducer } from './user/user.reducer';

function render(
    ui,
    {
        preloadedState,
        store = configureStore({
            reducer: {
                counter: counterReducer,
                tasks: tasksReducer,
                user: userReducer,
            },
            preloadedState,
        }),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>;
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
