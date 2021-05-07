import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './index';
import { MemoryRouter } from 'react-router-dom';

describe('<Header />', () => {
  test('should render without errors', async () => {
    render(<Header />, { wrapper: MemoryRouter });
  });
  test('should render logo', async () => {
    render(<Header />, { wrapper: MemoryRouter });
    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });
});
