import { MouseEvent, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  StyledContainer,
  StyledButton,
  StyledLeftArrow,
  StyledRightArrow,
} from './styled';
import { categoriesList } from '../../../utils/categories-list.utils';
import arrowImg from '../../../assets/arrow.svg';

const Categories = () => {
  const [paddingLeft, setPaddingLeft] = useState(0);
  const [paddingRight, setPaddingRight] = useState(0);

  const { push } = useRouter();
  const categories = useCallback(
    () => categoriesList.map((category) => category.toUpperCase()),
    [categoriesList],
  );

  const handleClick = (
    event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>,
    category: string,
  ) => {
    const categoryToLowercase = category.toLowerCase();
    event.preventDefault();

    if (categoryToLowercase === `tudo`) {
      push(`/`);
      return;
    }
    push(`/category/${categoryToLowercase}`);
  };

  const handleArrowClick = (to: 'left' | 'right') => {
    if (to === 'left') {
      setPaddingRight(() => 0);
      setPaddingLeft((state) => state + 8);
      if (paddingLeft > 32) {
        setPaddingLeft(0);
      }
    } else {
      setPaddingLeft(() => 0);
      setPaddingRight((state) => state + 8);
      if (paddingRight > 32) {
        setPaddingRight(0);
      }
    }
  };

  return (
    <StyledContainer>
      <StyledLeftArrow
        onClick={() => handleArrowClick('right')}
        css={{ transform: 'rotate(180deg)' }}
      >
        <Image
          layout="fixed"
          alt="flecha para a esquerda"
          priority={false}
          width={20}
          height={20}
          src={arrowImg}
        />
      </StyledLeftArrow>
      <ul
        style={{
          paddingLeft: `${paddingLeft}rem`,
          paddingRight: `${paddingRight}rem`,
        }}
      >
        {categories().map((category: string) => (
          <StyledButton
            css={{ borderRadius: `$full` }}
            onClick={(
              event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>,
            ) => handleClick(event, category)}
            key={category}
          >
            {category}
          </StyledButton>
        ))}
      </ul>
      <StyledRightArrow onClick={() => handleArrowClick('left')}>
        <Image
          layout="fixed"
          alt="flecha para a direita"
          priority={false}
          width={20}
          height={20}
          src={arrowImg}
        />
      </StyledRightArrow>
    </StyledContainer>
  );
};

export default Categories;
