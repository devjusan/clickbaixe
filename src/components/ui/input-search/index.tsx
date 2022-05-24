import Image from 'next/image';
import { StyledContainer, StyledInput, StyledImageContainer } from './styled';
import searchImg from '../../../assets/search.svg';

const InputSearch = () => (
  <StyledContainer>
    <StyledInput placeholder="Busque em nosso site" />
    <StyledImageContainer>
      <Image priority={false} src={searchImg} />
    </StyledImageContainer>
  </StyledContainer>
);

export default InputSearch;
