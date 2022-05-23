import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

test('it should render without crashing', () => {
  render(<Card>Hello Card!</Card>);
  expect(screen.getByText('Hello Card!')).toBeInTheDocument();
});

test('should accept some div attributes', () => {
  render(
    <Card className="test" style={{ color: 'red' }} role="article">
      Hello Card!
    </Card>
  );

  const element = screen.getByText('Hello Card!');

  expect(element).toHaveClass('test');
  expect(element).toHaveStyle('color: red');
  expect(element).toHaveAttribute('role', 'article');
});
