import { render } from '../../redux/test.utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserForm } from './user-form';

describe('UserForm Component', () => {
    let preloadedState;
    beforeEach(() => {
        preloadedState = {
            user: {
                isLogged: false,
            },
        };
    });
    test('should be rendered for us logging', () => {
        render(<UserForm mode={'login'} />, { preloadedState });
        expect(screen.getAllByText(/Login/i));
    });
    test('should be rendered when user is  logged', () => {
        preloadedState.user.isLogged = true;
        render(<UserForm mode={'registration'} />, { preloadedState });
        expect(screen.getAllByText(/Registration/i));
    });
});
