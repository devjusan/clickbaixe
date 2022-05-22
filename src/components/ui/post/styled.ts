import { styled } from '@//styles';

const StyledArticle = styled('article', {
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$44',
  borderBottom: '2px solid $color$black',
  borderRadius: '$default',

  cursor: 'pointer',
});

const StyledLine = styled('div', {
  width: '55%',
  background: '$black',
  borderRadius: '$full',
  height: '2px',
});

const StyledImageContainer = styled('div', {});

export { StyledArticle, StyledImageContainer, StyledLine };
