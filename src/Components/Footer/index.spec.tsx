import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Footer } from './index';

describe('<Footer />', () => {
  test('should render without errors', async () => {
    render(<Footer />);
  });
  test('should render links', async () => {
    render(<Footer />);
    expect(screen.getByText('Terms of Use')).toBeInTheDocument();
    expect(
      screen.getByText('Additional Content Information')
    ).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(
      screen.getByText('Children’s Online Privacy Policy')
    ).toBeInTheDocument();
    expect(screen.getByText('Star Wars Helpdesk')).toBeInTheDocument();
  });
});
