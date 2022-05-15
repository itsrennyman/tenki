import styled from 'styled-components';
import { Flex } from '../Flex';
import { Ripple } from '../Ripple';
import { Text } from '../Text';
import { WeatherInfoProps, WeatherProps } from './Weather.props';
import { StyledWeather } from './Weather.styled';

const Button = styled.button`
  background-color: rgb(0 0 0 / 20%);
  border: none;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  color: #fff;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;

  &:hover:enabled {
    background-color: rgb(0 0 0 / 30%);
    transform: scale(1.02);
  }

  &:disabled {
    background-color: rgb(0 0 0 / 10%);
    cursor: not-allowed;
  }
`;

const Informations = styled.div`
  display: flex;
  flex: 1.1;
  flex-direction: column;
  gap: 2rem;
  overflow-y: scroll;
  padding: 35px;
`;

const Picture = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: black;
  border-radius: 25px;
  padding: 25px;
  transform: scale(1.03);
  transition: all 0.5s cubic-bezier(0, 0.27, 0.17, 1.04);
  background: linear-gradient(
      to bottom,
      rgb(141 141 141 / 52%),
      rgba(117, 19, 93, 0.73)
    ),
    url(https://images.unsplash.com/photo-1559963110-71b394e7494d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80);

  &:hover {
    transform: scale(1.05) perspective(1500px) rotateY(10deg);
  }
`;

const WeatherInfo = ({ label, value }: WeatherInfoProps) => {
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
  data = [],
  isLoading = false,
  onReload,
  ...props
}: WeatherProps) => {
  const informations = data.map((element, index) => {
    return <WeatherInfo key={index} {...element} />;
  });

  if (isLoading) {
    return (
      <StyledWeather>
        <Flex justifyContent="center" alignItems="center" grow={1}>
          <Ripple />
        </Flex>
      </StyledWeather>
    );
  }

  return (
    <StyledWeather data-testid="weather">
      <Picture>
        <Text>{props.day}</Text>
        <div>
          <Text>{props.city}</Text>
          <Text fontSize="4em" fontWeight={700}>
            {props.temperature}°C
          </Text>
          <Text fontSize="1em" fontWeight={600}>
            {props.description}
          </Text>
        </div>
      </Picture>

      <Informations>
        <Flex direction="column" gap="1rem" grow={1}>
          {informations}
        </Flex>

        <Button onClick={onReload}>Reload Data!</Button>
      </Informations>
    </StyledWeather>
  );
};

export { Weather };
