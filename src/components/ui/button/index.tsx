import React from 'react';
import { StyledContainer } from './styled';

interface IButton {
  children: string;
}

const Button = ({ children }: IButton) => (
  <StyledContainer type="button">{children}</StyledContainer>
);

export default Button;
