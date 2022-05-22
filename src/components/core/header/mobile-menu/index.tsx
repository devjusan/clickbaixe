import ActiveLink from '@//components/ui/active-link';
import { NextComponentType } from 'next';
import { MouseEvent, useState } from 'react';
import { StyledMenu, StyledA, StyledNav } from './styles';

const MobileMenu: NextComponentType = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleClass = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
  ) => {
    const element = event.currentTarget;
    element.classList.toggle('active');
    setOpenMenu((state) => !state);
  };

  return (
    <StyledMenu onClick={(event) => toggleClass(event)}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>

      <StyledNav visible={openMenu ? 'show' : 'hide'}>
        <ActiveLink activeClassName={'active'} href="/">
          <StyledA> BLOG </StyledA>
        </ActiveLink>

        <ActiveLink activeClassName={'active'} href="#">
          <StyledA> CATEGORIAS </StyledA>
        </ActiveLink>
        <ActiveLink activeClassName={'active'} href="/privacy">
          <StyledA> POLÍTICA DE PRIVACIDADE </StyledA>
        </ActiveLink>
        <ActiveLink activeClassName={'active'} href="#">
          <StyledA> SOBRE </StyledA>
        </ActiveLink>
      </StyledNav>
    </StyledMenu>
  );
};

export default MobileMenu;
