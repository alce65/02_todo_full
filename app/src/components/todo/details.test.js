import { MemoryRouter } from 'react-router-dom';
import { render } from '../../redux/test.utils';
import { screen } from '@testing-library/react';

import { Detail } from './detail';

describe('Detail Component', () => {
    test('should be rendered and used', () => {
        render(
            <MemoryRouter
                initialEntries={[{ search: '?id=22' }]}
                initialIndex={0}
            >
                <Detail />
            </MemoryRouter>
        );
        expect(screen.getByText(/detalle/i));
        // expect(screen.getByText(/22/i));
    });
});
