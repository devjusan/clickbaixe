import { StyledTitle } from '@//styles/global';
import { NextComponentType } from 'next';
import ActiveLink from '../../ui/active-link';
import MobileMenu from './mobile-menu';
import { StyledHeader, StyledNav, StyledA } from './styled';

const Header: NextComponentType = () => {
  return (
    <StyledHeader>
      <StyledTitle type={'logo'}>CLICKBAIXE</StyledTitle>
      <StyledNav>
        <ActiveLink activeClassName={'active'} href="/">
          <StyledA> BLOG </StyledA>
        </ActiveLink>

        <ActiveLink activeClassName={'active'} href="#">
          <StyledA> CATEGORIAS </StyledA>
        </ActiveLink>
        <ActiveLink activeClassName={'active'} href="#">
          <StyledA> SOBRE </StyledA>
        </ActiveLink>
      </StyledNav>
      <MobileMenu />
    </StyledHeader>
  );
};

export default Header;
