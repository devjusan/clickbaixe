import React from 'react';
import { StyledContainer } from './styled';

interface IButton {
  children: string;
  width: string | number;
}

const Button = ({ children, width }: IButton) => (
  <StyledContainer
    css={{ width: typeof width === 'string' ? `${width}` : `${width}px` }}
    type="button"
  >
    {children}
  </StyledContainer>
);

export default Button;
