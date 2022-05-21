import { StyleTitle } from '@//styles/global';
import { NextComponentType } from 'next';
import { StyledHeader, StyledUl, StyledLi } from './styled';

const Header: NextComponentType = () => {
  return (
    <StyledHeader>
      <StyleTitle type={'logo'}>CLICKBAIXE</StyleTitle>
      <StyledUl>
        <StyledLi> BLOG </StyledLi>
        <StyledLi> CATEGORIAS </StyledLi>
        <StyledLi> SOBRE </StyledLi>
      </StyledUl>
    </StyledHeader>
  );
};

export default Header;
