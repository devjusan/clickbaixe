import { NextComponentType } from 'next'
import { MouseEvent, useState } from 'react'
import ActiveLink from '../../../ui/active-link'
import { StyledMenu, StyledA, StyledNav } from './styles'

const MobileMenu: NextComponentType = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleClass = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    const element = event.currentTarget
    element.classList.toggle(`active`)
    setOpenMenu((state) => !state)
  }

  return (
    <StyledMenu
      onClick={(event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) =>
        toggleClass(event)
      }
    >
      <div className="bar1" />
      <div className="bar2" />
      <div className="bar3" />

      <StyledNav visible={openMenu ? `show` : `hide`}>
        <ActiveLink activeClassName="active" href="/">
          <StyledA> BLOG </StyledA>
        </ActiveLink>

        <ActiveLink activeClassName="active" href="/privacy">
          <StyledA> POLÍTICA DE PRIVACIDADE </StyledA>
        </ActiveLink>
        <ActiveLink activeClassName="active" href="/helpus">
          <StyledA> APOIE </StyledA>
        </ActiveLink>
      </StyledNav>
    </StyledMenu>
  )
}

export default MobileMenu
