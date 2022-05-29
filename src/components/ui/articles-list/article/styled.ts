import { styled } from '../../../../styles'

const StyledContainer = styled(`div`, {
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

export { StyledContainer }
