import { styled } from '../../../styles'
import { spin } from '../../../styles/transitions'

const StyledContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: 'rgba(0, 0, 0, 0.4)',
  zIndex: '$accordion',
})

const StyledLoading = styled('div', {
  border: '8px solid #fafafa',
  borderTop: '8px solid $backgroundYellow',
  borderRadius: '50%',
  width: '60px',
  height: '60px',
  animation: `${spin} 1.5s linear infinite`,
})

export { StyledContainer, StyledLoading }
