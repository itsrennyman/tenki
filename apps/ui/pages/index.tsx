import * as React from 'react';
import { Container } from '../components/Container';
import { Weather } from '../components/Weather';

const wp = {
  day: 'Monday',
  city: 'Milan, Italy',
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

export function useWeather() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setData(wp);
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return {
    data: data,
    isLoading: isLoading,
  };
}

export function Index() {
  const { data, isLoading } = useWeather();

  const handleReload = () => {
    console.log('Reloading data...');
  };

  const { infos, ...rest } = data || {};

  return (
    <Container>
      <Weather
        data={infos}
        isLoading={isLoading}
        onReload={handleReload}
        {...rest}
      />
    </Container>
  );
}

export default Index;
