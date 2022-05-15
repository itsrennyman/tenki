import styled from 'styled-components';
import { Card } from '../Card';

const StyledWeather = styled(Card)`
  display: flex;
  flex: 1;
  justify-content: space-between;
  max-width: 600px;

  // Overrides
  padding: 0;
`;

export { StyledWeather };
