import { styled } from '../../../styles';

const StyledContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50%',
  borderTop: '4px solid #a99',
  borderBottom: '4px solid #a99',
  padding: '$28',

  p: {
    textAlign: 'center',
    fontSize: '$20',
    fontFamily: 'cursive',
  },
});

export { StyledContainer };
