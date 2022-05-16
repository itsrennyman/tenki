import axios from 'axios';
import * as React from 'react';
import { WeatherStackResponse } from '../types';

interface Props {
  apiKey: string;
  query: string;
}

export function useWeatherStack({ apiKey, query }: Props) {
  const [isError, setIsError] = React.useState<boolean>(false);
  const [data, setData] = React.useState<WeatherStackResponse | null>(null);

  React.useEffect(() => {
    axios
      .get('http://api.weatherstack.com/current', {
        params: {
          access_key: apiKey,
          query: query,
        },
      })
      .then(({ data }) => setData(data))
      .catch(() => setIsError(true));
  }, [apiKey, query]);

  return {
    data: data,
    isLoading: !data && !isError,
    isError: isError,
  };
}
