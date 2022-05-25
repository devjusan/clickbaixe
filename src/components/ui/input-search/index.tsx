import { useState } from 'react';
import Image from 'next/image';
import { StyledContainer, StyledInput, StyledImageContainer } from './styled';
import searchImg from '../../../assets/search.svg';

const InputSearch = () => {
  const [inputValue, setValue] = useState('');

  const handleInputChange = (event: any) => {
    event.preventDefault?.();
    let value = event?.target?.value;
    if (!value) {
      value = '';
    }
    setValue(value);
  };

  return (
    <StyledContainer>
      <StyledInput
        onChange={handleInputChange}
        placeholder="Busque em nosso site"
      />
      <StyledImageContainer>
        <Image priority={false} src={searchImg} />
      </StyledImageContainer>
    </StyledContainer>
  );
};

export default InputSearch;
