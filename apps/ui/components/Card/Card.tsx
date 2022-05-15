import { StyledCard } from './Card.styled';

interface Props {
  children: React.ReactNode;
}

const Card = ({ children, ...props }: Props) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

export { Card };
