import { styled } from '../../../styles'

const StyledContainer = styled('form', {
  position: 'relative',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-around',
  alignItems: 'center',

  '@md': {
    display: 'flex !important',
    alignContent: 'center',
    justifyContent: 'flex-start',
    paddingLeft: '$28',
    py: '$20',
    boxShadow: 'rgb(0 0 0 / 22%) 0px 1px 0px',
  },
})

const StyledInput = styled('input', {
  display: 'block',
  height: '100%',
  borderRadius: '$default',
  transition: 'outline 0.2s',
  padding: '$12',
  fontFamily: '$logo',
  fontSize: '$16',

  '@md': {
    border: '1px solid black',
  },

  '&:hover': {
    outline: '1px solid black',
  },

  '&::placeholder': {
    color: '#999',
    fontSize: '.9rem',
  },
})

const StyledImageContainer = styled('div', {
  position: 'absolute',
  right: '$20',
  top: '$16',

  '@md': {
    left: '225px',
    top: '43%',
  },
})

export { StyledContainer, StyledInput, StyledImageContainer }
