import styled from 'styled-components';

const StyledWeatherPicture = styled.div`
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

export { StyledWeatherPicture as WeatherPicture };
