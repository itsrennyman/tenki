import { FlexProps } from './Flex.props';
import { StyledFlex } from './Flex.styled';

const Flex = ({ children, ...props }: FlexProps) => {
  return <StyledFlex {...props}>{children}</StyledFlex>;
};

export { Flex };
