import styled from 'styled-components';
import { Flex } from '../Flex';
import { Text } from '../Text';
import { WeatherProps } from './Weather.props';
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

  &:hover {
    background-color: rgb(0 0 0 / 30%);
    transform: scale(1.02);
  }
`;

const Informations = styled.div`
  display: flex;
  flex: 1.1;
  flex-direction: column;
  padding: 35px;
`;

const WeatherSide = styled.div`
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

const Weather = ({ data = [], ...props }: WeatherProps) => {
  const informations = data.map((el, index) => {
    return (
      <Flex key={index} justifyContent="space-between">
        <Text as="dt" textTransform="uppercase" fontWeight={700}>
          {el.label}
        </Text>
        <Text as="dd">{el.value}</Text>
      </Flex>
    );
  });

  return (
    <StyledWeather data-testid="weather">
      <WeatherSide>
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
      </WeatherSide>

      <Informations>
        <Flex direction="column" gap="1rem" grow={1}>
          {informations}
        </Flex>

        <Button>Reload Data!</Button>
      </Informations>
    </StyledWeather>
  );
};

export { Weather };
