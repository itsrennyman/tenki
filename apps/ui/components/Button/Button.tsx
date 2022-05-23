import { StyledButton } from './Button.styled';

const Button = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'button'>) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export { Button };
