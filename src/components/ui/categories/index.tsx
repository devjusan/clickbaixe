import { useRouter } from 'next/router';
import { categoriesList } from '@//utils/categories-list.utils';
import { MouseEvent, useCallback } from 'react';
import { StyledContainer, StyledButton } from './styled';

const Categories = () => {
  const { push } = useRouter();
  const categories = useCallback(() => {
    return categoriesList.map((category) => category.toUpperCase());
  }, [categoriesList]);

  const handleClick = (
    event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>,
    category: string,
  ) => {
    const _category = category.toLowerCase();
    event.preventDefault();

    if (_category === 'tudo') {
      push(`/`);
      return;
    }
    push(`/category/${_category}`);
  };

  return (
    <StyledContainer>
      <ul>
        {categories().map((category: string) => (
          <StyledButton
            css={{ borderRadius: '$full' }}
            onClick={(event) => handleClick(event, category)}
            key={category}
          >
            {category}
          </StyledButton>
        ))}
      </ul>
    </StyledContainer>
  );
};

export default Categories;
