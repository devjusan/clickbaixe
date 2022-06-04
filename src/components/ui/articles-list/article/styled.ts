import { styled } from '../../../../styles'

const StyledContainer = styled('div', {
  display: `flex`,
  alignContent: `center`,
  justifyContent: `flex-start`,
  flexFlow: `column wrap`,
  gap: `$28`,
  width: '100%',
  maxWidth: '300px',

  img: {
    borderRadius: '$default',
    transition: `transform .2s ease`,

    '&:hover': {
      transform: `scale(1.1)`,
    },
  },
})

const StyledDate = styled('span', {
  position: `absolute`,
  right: '5px',
  bottom: '-1rem',
  fontWeight: '800',
  fontSize: '15px',
  fontFamily: '$articleTitle',
  color: 'gray',
})

export { StyledContainer, StyledDate }
