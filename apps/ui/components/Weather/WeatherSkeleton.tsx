import { Button } from '../Button';
import { Flex } from '../Flex';
import { Skeleton } from '../Skeleton';
import { Text } from '../Text';
import { WeatherInfo } from './Weather.props';
import { StyledWeather } from './Weather.styled';
import { WeatherInformations } from './WeatherInformations';
import { WeatherPicture } from './WeatherPicture';

const data = {
  day: 'Monday',
  city: 'Milan',
  country: 'Italy',
  temperature: 25,
  description: 'Sunny',
  infos: [
    { label: 'Wind Speed', value: '10 km/h' },
    { label: 'Wind Direction', value: 'SSE' },
    { label: 'UV Index', value: '10' },
    { label: 'Humidity', value: '90%' },
    { label: 'Pressure', value: '1021mb' },
    { label: 'Visibility', value: '16km' },
  ],
};

const InformationSkeleton = ({ label, value }: WeatherInfo) => {
  return (
    <Flex justifyContent="space-between">
      <Skeleton>
        <Text as="dt" textTransform="uppercase" fontWeight={700}>
          {label}
        </Text>
      </Skeleton>
      <Skeleton>
        <Text as="dd">{value}</Text>
      </Skeleton>
    </Flex>
  );
};

const WeatherSkeleton = () => {
  const { infos } = data;

  const informations = infos.map((element, index) => {
    return <InformationSkeleton key={index} {...element} />;
  });

  return (
    <StyledWeather data-cy="loading">
      <WeatherPicture />

      <WeatherInformations>
        <Flex direction="column" gap="1rem" grow={1}>
          {informations}
        </Flex>

        <Skeleton>
          <Button disabled={true}>Another Place!</Button>
        </Skeleton>
      </WeatherInformations>
    </StyledWeather>
  );
};

export { WeatherSkeleton };
