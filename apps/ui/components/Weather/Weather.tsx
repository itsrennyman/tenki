import { Button } from '../Button';
import { Flex } from '../Flex';
import { Text } from '../Text';
import { WeatherInfo, WeatherProps } from './Weather.props';
import { StyledWeather } from './Weather.styled';
import { WeatherInformations } from './WeatherInformations';
import { WeatherPicture } from './WeatherPicture';
import { WeatherSkeleton } from './WeatherSkeleton';

const Information = ({ label, value }: WeatherInfo) => {
  return (
    <Flex justifyContent="space-between">
      <Text as="dt" textTransform="uppercase" fontWeight={700}>
        {label}
      </Text>
      <Text as="dd">{value}</Text>
    </Flex>
  );
};

const Weather = ({
  data,
  isLoading = false,
  isError = false,
  onPlaceChange,
}: WeatherProps) => {
  if (isLoading) {
    return <WeatherSkeleton />;
  }

  if (isError) {
    return (
      <StyledWeather data-cy="error">
        <Flex justifyContent="center" alignItems="center" grow={1}>
          Impossible to load weather data.
        </Flex>
      </StyledWeather>
    );
  }

  const { infos, ...rest } = data;

  const informations = infos.map((element, index) => {
    return <Information key={index} {...element} />;
  });

  return (
    <StyledWeather data-testid="weather" data-cy="weather">
      <WeatherPicture>
        <Flex direction="column" gap="5px">
          <Text>{rest.day}</Text>
        </Flex>
        <div>
          <Text fontSize="0.9em">
            {rest.city} ({rest.country})
          </Text>
          <Text fontSize="4em" fontWeight={700}>
            {rest.temperature}
          </Text>
          <Text fontSize="1em" fontWeight={600}>
            {rest.description}
          </Text>
        </div>
      </WeatherPicture>

      <WeatherInformations>
        <Flex direction="column" gap="1rem" grow={1}>
          {informations}
        </Flex>

        <Button onClick={onPlaceChange}>Another Place!</Button>
      </WeatherInformations>
    </StyledWeather>
  );
};

export { Weather };
