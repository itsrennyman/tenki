export interface WeatherProps {
  day: string;
  city: string;
  temperature: number;
  description: string;
  isLoading: boolean;
  onReload?: () => void;
  data: WeatherInfoProps[];
}

export interface WeatherInfoProps {
  label: string;
  value: string;
}
