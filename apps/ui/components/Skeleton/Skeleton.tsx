import { StyledSkeleton } from './Skeleton.styled';

const Skeleton = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => {
  return <StyledSkeleton {...props}>{children}</StyledSkeleton>;
};

export { Skeleton };
