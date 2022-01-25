import React from 'react';
import Button from '../Button';
import { render, screen } from '@tests';

test('Should be rendered', () => {
  render(<Button />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});

test('Should be render a custom children', () => {
  render(<Button>Test</Button>);
  const children = screen.getByText('Test');
  expect(children).toBeInTheDocument();
});

test('Should has a custom class', () => {
  render(<Button className="customClass">Button</Button>);
  const button = screen.getByRole('button');
  expect(button).toHaveClass('customClass');
});
