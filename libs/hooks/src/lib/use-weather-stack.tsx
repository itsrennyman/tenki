import axios from 'axios';
import * as React from 'react';
import { WeatherStackResponse } from '../types';
import { usePosition } from './use-position';

interface Props {
  apiKey: string;
  query?: string;
}

const useWeatherStack = ({ apiKey, query }: Props) => {
  const position = usePosition();
  const [isError, setIsError] = React.useState<boolean>(false);
  const [data, setData] = React.useState<WeatherStackResponse | null>(null);

  const fetchWeather = React.useCallback(
    (qs: string) => {
      axios
        .get('http://api.weatherstack.com/current', {
          params: {
            access_key: apiKey,
            query: qs,
          },
        })
        .then(({ data }) => {
          if ('success' in data && data.success === false) {
            throw new Error(data.error.info);
          }

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

export { useWeatherStack };
