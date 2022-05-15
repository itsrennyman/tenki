import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import { Weather } from './Weather';

const props = {
  day: 'Monday',
  city: 'Milan, Italy',
  temperature: 25,
  description: 'Sunny',
  data: [
    { label: 'Wind', value: '10km/h' },
    { label: 'Humidity', value: '60%' },
    { label: 'Pressure', value: '1025mb' },
    { label: 'Sunrise', value: '6:00am' },
    { label: 'Sunset', value: '6:00pm' },
    { label: 'Geo coords', value: '45.465,12.234' },
  ],
};

test('should render without crashing', () => {
  const { data, ...rest } = props;
  render(<Weather data={data} {...rest} />);
  expect(screen.getByTestId('weather')).toBeInTheDocument();
});

test('should render correctly', () => {
  const { data, ...rest } = props;
  const tree = TestRenderer.create(<Weather data={data} {...rest} />).toJSON();
  expect(tree).toMatchSnapshot();
});
