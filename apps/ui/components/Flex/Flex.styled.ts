import styled from 'styled-components';
import { StyledFlexProps } from './Flex.props';

const StyledFlex = styled.div<StyledFlexProps>`
  display: flex;
  flex-shrink: 1;
  flex-basis: auto;
  flex-grow: ${({ grow }) => grow};
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  gap: ${({ gap }) => gap || '0'};
`;

export { StyledFlex };
