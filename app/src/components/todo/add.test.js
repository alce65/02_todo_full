import { render } from '../../redux/test.utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Add } from './add';

describe('Task Component', () => {
    let preloadedState;

    beforeEach(() => {
        preloadedState = {
            tasks: [
                {
                    id: 1,
                    name: 'First ToDo',
                    responsible: 'Pepe',
                },
            ],
            user: { userName: 'Pepe' },
        };
    });
    test('should be rendered', () => {
        render(<Add />, { preloadedState });
        expect(screen.getByPlaceholderText(/Nombre/i));
        expect(screen.getByPlaceholderText(/Responsable/i));
    });
});
