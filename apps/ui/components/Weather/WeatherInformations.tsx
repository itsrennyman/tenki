import styled from 'styled-components';

const StyledInformations = styled.div`
  display: flex;
  flex: 1.1;
  flex-direction: column;
  gap: 2rem;
  overflow-y: scroll;
  padding: 35px;
`;

const WeatherInformations = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => {
  return <StyledInformations {...props}>{children}</StyledInformations>;
};

export { WeatherInformations };
