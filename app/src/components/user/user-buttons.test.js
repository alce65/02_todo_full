import { render } from '../../redux/test.utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserButtons } from './user-buttons';

describe('UserButtons Component', () => {
    let preloadedState;
    beforeEach(() => {
        preloadedState = {
            user: {
                isLogged: false,
            },
        };
    });
    test('should be rendered when user is not logged', () => {
        render(<UserButtons />, { preloadedState });
        expect(screen.getByText(/Login/i));
        expect(screen.getByText(/Registration/i));
    });
    test('should be rendered when user is  logged', () => {
        preloadedState.user.isLogged = true;
        render(<UserButtons />, { preloadedState });
        expect(screen.getByText(/Logout/i));
    });
});
