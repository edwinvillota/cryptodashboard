import React from 'react';
import Input from '../Input';
import { render, screen } from '@tests';

test('Should be rendered', () => {
  render(<Input />);
  const input = screen.getByRole('textbox');
  expect(input).toBeInTheDocument();
});

test('Should has a custom class', () => {
  render(<Input className="customClass" />);
  const input = screen.getByLabelText('input-wrapper');
  expect(input).toHaveClass('customClass');
});

test('Should render a custom icon', () => {
  render(<Input icon={<span role="img">Icon</span>} />);
  const icon = screen.getByRole('img');
  expect(icon).toBeInTheDocument();
});
