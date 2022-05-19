import { WeatherApiResponse } from '@tenki/hooks';

const normalize = (data: WeatherApiResponse) => {
  const { location, current } = data;
  const currentDay = new Date().toLocaleDateString('en-EN', {
    weekday: 'long',
  });

  return {
    day: currentDay,
    city: location.name,
    country: location.country,
    temperature: `${current.temp_c}°C`,
    description: current.condition.text,
    infos: [
      { label: 'Wind Speed', value: `${current.wind_kph} km/h` },
      { label: 'Wind Direction', value: current.wind_dir },
      { label: 'UV Index', value: current.uv },
      { label: 'Humidity', value: `${current.humidity}%` },
      { label: 'Pressure', value: `${current.pressure_mb}mb` },
      { label: 'Visibility', value: `${current.vis_km}km` },
    ],
  };
};

export { normalize };
