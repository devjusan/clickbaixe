import { styled } from '../../../styles'

const StyledContainer = styled(`article`, {})

const StyledContainerList = styled(`div`, {
  display: `flex`,
  flexWrap: `wrap`,
  justifyContent: `center`,
  gap: `$16`,
  rowGap: `$72`,
  marginTop: `$52`,
})

export { StyledContainer, StyledContainerList }
