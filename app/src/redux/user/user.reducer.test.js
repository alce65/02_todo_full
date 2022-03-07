import * as action from './action-creators';
import { userReducer } from './user.reducer';

test('counterReducer', () => {
    const initialState = {
        token: '',
        userName: '',
        id: '',
        isLogged: false,
    };
    expect(userReducer(initialState, action.login()).isLogged).toBe(true);
    expect(userReducer(initialState, action.logout()).isLogged).toBe(false);
});
