import { styled } from '@//styles';

const StyledHeader = styled('header', {
  width: '100%',
  height: '$132',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  px: '$52',
  boxShadow: '0px 1px 0px rgba(0, 0, 0, 0.22);',
});

const StyledUl = styled('ul', {
  display: 'flex',
  alignContent: 'center',
  gap: '$28',
  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
});

const StyledLi = styled('li', {
  fontSize: '$24',
  fontFamily: 'Benne',
  fontWeight: '300',
  listStyle: 'none',
});

export { StyledHeader, StyledUl, StyledLi };
