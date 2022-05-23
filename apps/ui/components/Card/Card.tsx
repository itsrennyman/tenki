import React from 'react';
import { StyledCard } from './Card.styled';

const Card = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

export { Card };
