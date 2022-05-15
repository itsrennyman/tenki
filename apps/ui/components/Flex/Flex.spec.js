import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Flex } from './Flex';

test('should render without crashing', () => {
  render(<Flex>Hello World</Flex>);
  expect(screen.getByText('Hello World')).toBeInTheDocument();
});
