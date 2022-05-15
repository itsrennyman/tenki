import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

test('it should render without crashing', () => {
  render(<Card>Hello Card!</Card>);
  expect(screen.getByText('Hello Card!')).toBeInTheDocument();
});
