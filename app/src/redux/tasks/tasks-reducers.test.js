import * as action from './action-creators';
import { tasksReducer } from './tasks-reducers';

test('counterReducer', () => {
    const initialState = [];
    const data = [{ _id: 1, title: 'Task 1' }];
    const states = [];
    states[0] = tasksReducer(initialState, action.loadTasks(data));
    expect(states[0].length).toBe(1);
    states[1] = tasksReducer(
        initialState,
        action.createTask({ title: 'Task 2' })
    );
    expect(states[1].length).toBe(2);
    states[2] = tasksReducer(
        initialState,
        action.updateTask({ _id: 2, title: 'Updated Task 2' })
    );
    expect(states[2][1].title).toBe(/Updated/i);
    states[3] = tasksReducer(
        initialState,
        action.removeTask({ _id: 2, title: 'Updated Task 2' })
    );
    expect(states[3].length).toBe(1);
});
