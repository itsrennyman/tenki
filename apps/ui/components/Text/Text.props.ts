import React from 'react';

export interface TextProps extends StyledTextProps {
  as?: React.ElementType;
  children: React.ReactNode;
}

export interface StyledTextProps {
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  fontSize?: string;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
}
