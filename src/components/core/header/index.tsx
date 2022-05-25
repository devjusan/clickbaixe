import { NextComponentType } from 'next';
import { useRouter } from 'next/router';
import { StyledHeader, StyledNav, StyledA } from './styled';
import ActiveLink from '../../ui/active-link';
import MobileMenu from './mobile-menu';
import Categories from '../../ui/categories';
import { StyledTitle } from '../../../styles/global';

const Header: NextComponentType = () => {
  const { push } = useRouter();
  const handleClick = () => {
    push(`/`);
  };

  return (
    <>
      {` `}
      <StyledHeader>
        <StyledTitle
          onClick={handleClick}
          css={{ cursor: `pointer` }}
          type="logo"
        >
          CLICKBAIXE
        </StyledTitle>
        <StyledNav>
          <ActiveLink activeClassName="active" href="/">
            <StyledA> BLOG </StyledA>
          </ActiveLink>

          <ActiveLink activeClassName="active" href="/helpus">
            <StyledA> APOIE </StyledA>
          </ActiveLink>
        </StyledNav>
        <MobileMenu />
      </StyledHeader>
      <Categories />
    </>
  );
};

export default Header;
