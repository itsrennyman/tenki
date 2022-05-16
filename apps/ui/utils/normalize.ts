import { WeatherStackResponse } from '@tenki/hooks';

const normalize = (data: WeatherStackResponse) => {
  const { location, current } = data;
  const currentDay = new Date().toLocaleDateString('en-EN', {
    weekday: 'long',
  });

  return {
    day: currentDay,
    city: location.name,
    temperature: `${current.temperature}°C`,
    description: current.weather_descriptions[0],
    infos: [
      { label: 'Wind Speed', value: `${current.wind_speed} km/h` },
      { label: 'Wind Direction', value: current.wind_dir },
      { label: 'UV Index', value: current.uv_index },
      { label: 'Humidity', value: `${current.humidity}%` },
      { label: 'Pressure', value: `${current.pressure} mbar` },
      { label: 'Visibility', value: `${current.visibility} km` },
    ],
  };
};

export { normalize };
