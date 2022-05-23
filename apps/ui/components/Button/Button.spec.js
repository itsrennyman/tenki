import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

test('should render a button', () => {
  render(<Button>Click me</Button>);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent('Click me');
});

test('should handle click events', async () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick}>Click me</Button>);
  const button = screen.getByRole('button');
  await userEvent.click(button);
  expect(onClick).toHaveBeenCalledTimes(1);
});
