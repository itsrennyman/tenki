import { Container } from '../components/Container';
import { Weather } from '../components/Weather';

const wp = {
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

export function Index() {
  const { data, ...rest } = wp;

  return (
    <Container>
      <Weather data={data} {...rest} />
    </Container>
  );
}

export default Index;
