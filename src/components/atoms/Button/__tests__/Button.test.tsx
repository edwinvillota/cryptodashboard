import React from 'react';
import Button from '../Button';
import { render, screen } from '@tests';

test('Should be rendered', () => {
  render(<Button />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});
