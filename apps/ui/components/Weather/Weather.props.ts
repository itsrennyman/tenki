export interface WeatherProps {
  isLoading: boolean;
  isError: boolean;
  onPlaceChange?: () => void;
  data: WeatherData | null;
}

export interface WeatherData {
  day: string;
  city: string;
  country: string;
  temperature: string;
  description: string;
  infos: WeatherInfo[];
}

export interface WeatherInfo {
  label: string;
  value: string | number;
}
