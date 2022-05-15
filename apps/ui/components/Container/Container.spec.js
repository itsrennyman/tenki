import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Container } from './Container';

test('it should render without crashing', () => {
  render(<Container />);
  expect(screen.getByRole('main')).toBeInTheDocument();
});

test('it should render children', () => {
  render(<Container>Hello World</Container>);
  expect(screen.getByText('Hello World')).toBeInTheDocument();
});
