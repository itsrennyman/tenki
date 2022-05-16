export interface WeatherProps {
  isLoading: boolean;
  isError: boolean;
  onReload?: () => void;
  data: WeatherData | null;
}

export interface WeatherData {
  day: string;
  city: string;
  temperature: string;
  description: string;
  infos: WeatherInfo[];
}

export interface WeatherInfo {
  label: string;
  value: string | number;
}
