import { StyledContainer } from './Container.styled';

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export { Container };
