export interface WeatherProps {
  day: string;
  city: string;
  temperature: number;
  description: string;
  data: WeatherInformationProps[];
}

export interface WeatherInformationProps {
  label: string;
  value: string;
}
