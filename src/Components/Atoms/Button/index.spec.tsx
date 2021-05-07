import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

import { Button } from './index';

describe('<Button />', () => {
  test('should render without errors', async () => {
    render(<Button />);
  });
  test('should render button text', async () => {
    const { findByTestId } = render(<Button>Test Button</Button>);
    const button = await findByTestId('button');
    expect(button).toHaveTextContent('Test Button');
  });
  test('should be disabled when disabled is true', async () => {
    const { findByTestId } = render(<Button disabled />);
    const button = await findByTestId('button');
    expect(button).toBeDisabled();
  });
  test('should be not be disabled if disabled prop not passed', async () => {
    const { findByTestId } = render(<Button />);
    const button = await findByTestId('button');
    expect(button).not.toBeDisabled();
  });
  test('should render relevant button type', async () => {
    const { findByTestId } = render(<Button type="submit" />);
    const button = await findByTestId('button');
    expect(button).toHaveAttribute('type', 'submit');
  });
  test('should fire onClick event', async () => {
    const handleClick = jest.fn();
    const { findByTestId } = render(<Button onClick={handleClick} />);
    const button = await findByTestId('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
