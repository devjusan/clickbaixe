import { styled } from '@//styles';

const StyledContainer = styled('article', {
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
  padding: '0',
});

const StyledContainerList = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '$16',
  rowGap: '$72',
});

export { StyledContainer, StyledContainerList };
