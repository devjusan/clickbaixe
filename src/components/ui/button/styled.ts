import { styled } from '../../../styles';
import { hoverSolidIn, hoverSolidOut } from '../../../styles/transitions';

const StyledContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  appearance: 'auto',
  fontFamily: '$logo',
  fontWeight: 'bold',
  fontSize: '$20',
  textTransform: 'uppercase',
  borderRadius: '$default',
  border: '1.5px solid $backgroundYellow',
  cursor: 'pointer',
  background: '$white',
  color: '$backgroundYellow',
  letterSpacing: '0px',

  transition: `all 0.3s ease`,
  animationName: `${hoverSolidOut}`,
  animationDuration: '0.3s',
  animationIterationCount: '1',
  animationTimingFunction: 'ease-in',
  animationDirection: 'normal',
  animationFillMode: 'both',
  '&:hover:not(:disabled)': {
    animationName: `${hoverSolidIn}`,
    color: '$white',
  },

  px: '$12',
  py: '$16',

  '@md': {
    width: '180px',
  },
});

export { StyledContainer };
