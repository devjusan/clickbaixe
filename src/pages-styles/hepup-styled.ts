import { styled } from '../styles'

const StyledContainer = styled(`article`, {
  display: `flex`,
  flexFlow: `column wrap`,
  alignItems: `center`,
  justifyContent: `center`,
  gap: `$28`,

  p: {
    maxWidth: `800px`,
    fontSize: `$20`,
    lineHeight: `22px`,
    overflowWrap: `break-word`,
    fontFamily: `$articleTitle`,
  },
})

export { StyledContainer }
