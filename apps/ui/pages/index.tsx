import { useWeatherApi } from '@tenki/hooks';
import * as React from 'react';
import { Container } from '../components/Container';
import { Weather } from '../components/Weather';
import { normalize } from '../utils/normalize';

export function Index() {
  const { data, isLoading, isError } = useWeatherApi({
    apiKey: process.env.NEXT_PUBLIC_WEATHER_API_API_KEY,
  });

  const normalized = data ? normalize(data) : null;

  return (
    <Container>
      <Weather data={normalized} isLoading={isLoading} isError={isError} />
    </Container>
  );
}

export default Index;
