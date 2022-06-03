import { NextComponentType } from 'next'
import { useRouter } from 'next/router'
import { StyledHeader, StyledNav, StyledA, StyledContainer } from './styled'
import ActiveLink from '../../ui/active-link'
import MobileMenu from './mobile-menu'
import Categories from '../../ui/categories'
import { StyledTitle } from '../../../styles/global'
import InputSearch from '../../ui/input-search'

const Header: NextComponentType = () => {
  const { push } = useRouter()
  const handleClick = () => {
    push(`/`)
  }

  return (
    <StyledContainer>
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
          <InputSearch />
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
      <InputSearch isMobile />
    </StyledContainer>
  )
}

export default Header
