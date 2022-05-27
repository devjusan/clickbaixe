import React from 'react'
import { StyledContainer } from './styled'

interface IButton {
  children: string
  width: string | number
  href: string
}

const Button = ({ children, width, href }: IButton) => (
  <StyledContainer
    href={href}
    css={{ width: typeof width === 'string' ? `${width}` : `${width}px` }}
    type="button"
    target="_blank"
  >
    {children}
  </StyledContainer>
)

export default Button
