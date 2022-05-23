import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

const StyledSkeleton = styled.div`
  display: inline-block;
  height: 'auto';
  width: 'auto';
  position: relative;
  overflow: hidden;
  background: #3a3a3a;
  border-radius: 2px;

  & * {
    opacity: 0;
  }

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      to right,
      #3a3a3a 0%,
      #3f3f3f 10%,
      #4a4a4a 20%,
      #3f3f3f 30%,
      #3a3a3a 50%,
      #3a3a3a 100%
    );
    animation: ${shimmer} 2s infinite;
    content: '';
  }
`;

export { StyledSkeleton };
