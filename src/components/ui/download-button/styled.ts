import { styled } from '../../../styles'

const StyledContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$28',
  alignItems: 'center',
  justifyContent: 'center',
  width: '700px',
  borderTop: '4px solid #a99',
  borderBottom: '4px solid #a99',
  padding: '$28',

  p: {
    textAlign: 'center',
    fontSize: '$20',
    fontFamily: '$logo',
  },

  '@lg': {
    width: '600px',
  },
  '@md': {
    width: '500px',
  },
  '@sm': { width: '80%' },
})

export { StyledContainer }
