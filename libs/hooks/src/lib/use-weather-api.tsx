import axios from 'axios';
import * as React from 'react';
import { WeatherApiResponse } from '../types';
import { usePosition } from './use-position';

interface Props {
  apiKey: string;
  query?: string;
}

const useWeatherApi = ({ apiKey, query }: Props) => {
  const position = usePosition();
  const [isError, setIsError] = React.useState<boolean>(false);
  const [data, setData] = React.useState<WeatherApiResponse | null>(null);

  const fetchWeather = React.useCallback(
    (qs: string) => {
      axios
        .get('https://api.weatherapi.com/v1/current.json', {
          params: {
            key: apiKey,
            q: qs,
            aqi: 'no',
          },
        })
        .then(({ data }) => {
          setData(data);
        })
        .catch((err) => {
          setIsError(true);
        });
    },
    [apiKey]
  );

  React.useEffect(() => {
    if (!query) {
      return;
    }
    fetchWeather(query);
  }, [apiKey, query, fetchWeather]);

  React.useEffect(() => {
    if (!position || query) {
      return;
    }
    const { latitude, longitude } = position.coords;
    fetchWeather(`${latitude},${longitude}`);
  }, [apiKey, position, fetchWeather, query]);

  return {
    data: data,
    isLoading: !data && !isError,
    isError: isError,
  };
};

export { useWeatherApi };
