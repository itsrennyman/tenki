import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Text } from '../Text';

test('renders without crashing', () => {
  render(<Text>Hello World</Text>);
  expect(screen.getByText('Hello World')).toBeInTheDocument();
});

test('should have a specific font weight', () => {
  render(<Text fontWeight={500}>Hello World</Text>);
  expect(screen.getByText('Hello World')).toHaveStyle('font-weight: 500');
});

test('should have a specific font size', () => {
  render(<Text fontSize="2rem">Hello World</Text>);
  expect(screen.getByText('Hello World')).toHaveStyle('font-size: 2rem');
});

test('should support polymorhism with strings', () => {
  render(<Text as="h1">Hello World</Text>);
  expect(screen.getByRole('heading')).toBeInTheDocument();
});

test('should support polymorhism with components', () => {
  const CustomComponent = () => <main>Hello World</main>;
  render(<Text as={CustomComponent}>Hello World</Text>);
  expect(screen.getByRole('main')).toBeInTheDocument();
});
