import '@testing-library/dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TestRenderer from 'react-test-renderer';
import { Weather } from './Weather';

const props = {
  day: 'Monday',
  city: 'Milan',
  country: 'Italy',
  temperature: 25,
  description: 'Sunny',
  infos: [
    { label: 'Wind', value: '10km/h' },
    { label: 'Humidity', value: '60%' },
    { label: 'Pressure', value: '1025mb' },
    { label: 'Sunrise', value: '6:00am' },
    { label: 'Sunset', value: '6:00pm' },
    { label: 'Geo coords', value: '45.465,12.234' },
  ],
};

test('should render without crashing', () => {
  render(<Weather data={props} />);
  expect(screen.getByTestId('weather')).toBeInTheDocument();
});

test('should render correctly', () => {
  const tree = TestRenderer.create(<Weather data={props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should trigger correctly onPlaceChange on button click', async () => {
  const user = userEvent.setup();
  const onPlaceChange = jest.fn();
  render(<Weather data={props} onPlaceChange={onPlaceChange} />);
  await user.click(screen.getByRole('button'));
  expect(onPlaceChange).toHaveBeenCalled();
});
