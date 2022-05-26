import { styled } from '../../../styles';
import { hoverSolidIn, hoverSolidOut } from '../../../styles/transitions';

const StyledContainer = styled('a', {
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

  transition: `color 0.3s ease`,
  animationName: `${hoverSolidOut}`,
  animationDuration: '0.3s',
  animationIterationCount: '1',
  animationTimingFunction: 'ease',
  animationDirection: 'normal',
  animationFillMode: 'both',
  '&:hover:not(:disabled)': {
    animationName: `${hoverSolidIn}`,
    color: '$white !important',
  },

  px: '$12',
  py: '$16',

  '@md': {
    width: '180px',
  },
});

export { StyledContainer };
