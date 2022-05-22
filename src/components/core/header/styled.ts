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

const StyledNav = styled('nav', {
  display: 'flex',
  alignContent: 'center',
  gap: '$28',
  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  '@md': {
    a: {
      display: 'none',
    },
  },
  a: {
    transition: 'color .2s',
  },
  'a:hover': {
    color: 'rgba(0, 0, 0, 0.70)',
  },
  'a.active': {
    color: '$black',
    fontWeight: '600',
  },
  'a.active::after': {
    content: '',
    height: '2px',
    borderRadius: '$full',
    width: '4rem',
    position: 'absolute',
    top: '5.45rem',
    left: '0',
    background: 'rgba(0, 0, 0, 0.9)',
  },
});

const StyledA = styled('a', {
  fontSize: '$24',
  fontFamily: 'Benne',
  fontWeight: '300',
  listStyle: 'none',
});

export { StyledHeader, StyledNav, StyledA };
