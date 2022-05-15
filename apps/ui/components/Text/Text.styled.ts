import styled from 'styled-components';
import { StyledTextProps } from './Text.props';

const StyledText = styled.p<StyledTextProps>`
  margin: 0;
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  text-transform: ${({ textTransform }) => textTransform || 'none'};
`;

export { StyledText };
