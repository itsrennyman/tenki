import { useWeatherApi } from '@tenki/hooks';
import * as React from 'react';
import { Container } from '../components/Container';
import { Weather } from '../components/Weather';
import { normalize } from '../utils/normalize';

const coordinates = [
  { lat: 35.681382, lon: 139.766084 },
  { lat: 40.7127, lon: -74.0059 },
  { lat: 100.5018, lon: 13.7563 },
  { lat: -33.8688, lon: 151.2093 },
  { lat: -35.2809, lon: 149.13 },
  { lat: -22.9068, lon: -43.1729 },
  { lat: -21.2041, lon: -159.7751 },
  { lat: -27.4698, lon: 153.0251 },
  { lat: -42.8821, lon: 147.3238 },
  { lat: -41.2865, lon: 174.7762 },
  { lat: -37.8136, lon: 144.9631 },
];

export function Index() {
  const [query, setQuery] = React.useState<string | null>(null);
  const { data, isLoading, isError } = useWeatherApi({
    apiKey: process.env.NEXT_PUBLIC_WEATHER_API_API_KEY,
    query: query,
  });

  const normalized = data ? normalize(data) : null;

  const handlePlaceChange = () => {
    const place = coordinates[Math.floor(Math.random() * coordinates.length)];
    setQuery(`${place.lat},${place.lon}`);
  };

  return (
    <Container>
      <Weather
        data={normalized}
        isLoading={isLoading}
        isError={isError}
        onPlaceChange={handlePlaceChange}
      />
    </Container>
  );
}

export default Index;
