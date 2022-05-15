import React from 'react';
import { TextProps } from './Text.props';
import { StyledText } from './Text.styled';

const Text = ({ children, ...props }: TextProps) => {
  return <StyledText {...props}>{children}</StyledText>;
};

export { Text };
