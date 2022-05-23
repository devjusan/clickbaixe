import { StyledTitle } from '@//styles/global';
import { NextComponentType } from 'next';
import { StyledHeader, StyledNav, StyledA } from './styled';
import { useRouter } from 'next/router';
import ActiveLink from '../../ui/active-link';
import MobileMenu from './mobile-menu';

const Header: NextComponentType = () => {
  const { push } = useRouter();
  const handleClick = () => {
    push('/');
  };

  return (
    <StyledHeader>
      <StyledTitle
        onClick={handleClick}
        css={{ cursor: 'pointer' }}
        type={'logo'}
      >
        CLICKBAIXE
      </StyledTitle>
      <StyledNav>
        <ActiveLink activeClassName={'active'} href="/">
          <StyledA> BLOG </StyledA>
        </ActiveLink>

        <ActiveLink activeClassName={'active'} href="/categories">
          <StyledA> CATEGORIAS </StyledA>
        </ActiveLink>
        <ActiveLink activeClassName={'active'} href="/helpus">
          <StyledA> APOIE </StyledA>
        </ActiveLink>
      </StyledNav>
      <MobileMenu />
    </StyledHeader>
  );
};

export default Header;
