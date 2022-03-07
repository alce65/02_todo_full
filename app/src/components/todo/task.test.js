import { render } from '../../redux/test.utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import * as actions from '../../redux/tasks/action-creators';

import { Task } from './task';

// jest.mock("../../redux/tasks/action-creators");

describe('Task Component', () => {
    let task;
    let preloadedState;
    console.log(actions);
    beforeEach(() => {
        task = {
            id: 1,
            title: 'First ToDo',
            responsible: { name: 'Pepe' },
        };
        preloadedState = {
            user: {
                id: 1,
                userName: 'Pepe',
                token: 'Baerer token',
            },
        };
    });
    test('should be rendered and used', () => {
        render(
            <MemoryRouter>
                <Task task={task} />
            </MemoryRouter>,
            { preloadedState }
        );
        expect(screen.getByText(/First/i));
        expect(screen.getByText(/Pepe/i));
        const btn = screen.getByRole('button');
        userEvent.click(btn);
        // TODO expect
        const checkbox = screen.getByRole('checkbox');
        userEvent.click(checkbox);
        // TODO expect
    });
});
