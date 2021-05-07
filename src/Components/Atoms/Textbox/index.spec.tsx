import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

import { TextBox } from './index';

describe('<TextBox />', () => {
  test('should render without errors', async () => {
    render(<TextBox id="testInputId" name="testInputName" />);
  });
  test('should display validation message', async () => {
    const { findByTestId } = render(
      <TextBox
        id="testInputId"
        name="testInputName"
        isValid={false}
        validationMessage="test validation message"
      />
    );
    const textInputErrorMessage = await findByTestId('textInputErrorMessage');
    expect(textInputErrorMessage).toHaveTextContent('test validation message');
  });
  test('should fire onClick event', async () => {
    const handleChange = jest.fn();
    const { findByTestId } = render(
      <TextBox id="testInputId" name="testInputName" onChange={handleChange} />
    );
    const input = await findByTestId('textInput');
    fireEvent.change(input, { target: { value: '23' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
