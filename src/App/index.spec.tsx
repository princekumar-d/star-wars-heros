import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { App } from './index';

describe('<App />', () => {
  test('should render without errors', async () => {
    render(<App />, { wrapper: MemoryRouter });
  });
});
