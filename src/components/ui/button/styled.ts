import { styled } from '../../../styles';
import { hoverSolidIn, hoverSolidOut } from '../../../styles/transitions';

const StyledContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '80%',

  appearance: 'auto',
  fontFamily: '$logo',
  fontWeight: 'bold',
  fontSize: '$20',
  textTransform: 'uppercase',
  borderRadius: '$default',
  border: '1px solid rgb(235, 224, 0)',
  cursor: 'pointer',
  background: 'rgb(255, 234, 0)',
  color: '$black',
  letterSpacing: '0px',

  transition: `color 0.3s ease`,
  animationName: `${hoverSolidOut}`,
  animationDuration: '0.3s',
  animationIterationCount: '1',
  animationTimingFunction: 'ease-in',
  animationDirection: 'normal',
  animationFillMode: 'both',
  '&:hover:not(:disabled)': { animationName: `${hoverSolidIn}`, color: '#444' },

  px: '$12',
  py: '$16',

  '@md': {
    width: '180px',
  },
});

export { StyledContainer };
