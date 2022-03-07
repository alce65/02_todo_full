import * as action from './action-creators';
import { counterReducer } from './counter-reducer';

test('counterReducer', () => {
    const initialState = 0;
    expect(counterReducer(initialState, action.incrementCounter())).toBe(1);
    expect(counterReducer(initialState, action.decrementCounter())).toBe(-1);
    expect(counterReducer(12, action.resetCounter())).toBe(0);
});
