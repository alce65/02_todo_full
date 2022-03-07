import { render } from '../redux/test.utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './counter';

describe('Counter Component', () => {
    let preloadedState;
    beforeEach(() => {
        preloadedState = {
            counter: 0,
        };
    });
    test('should be rendered and used', async () => {
        render(<Counter />, { preloadedState });
        expect(screen.getByText(/Counter/i));
        expect(screen.getByText(/0/i));
        const increment = screen.getByText(/\+/i);
        const decrement = screen.getByText(/-/i);
        const reset = screen.getByText(/reset/i);
        userEvent.click(increment);
        expect(screen.getByText(/1/i));
        userEvent.click(reset);
        expect(screen.getByText(/0/i));
        userEvent.click(decrement);
        expect(screen.getByText(/-1/i));
    });
});
