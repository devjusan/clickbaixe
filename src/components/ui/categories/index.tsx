import { MouseEvent, useCallback } from 'react'
import { useRouter } from 'next/router'
import { StyledContainer, StyledButton } from './styled'
import { categoriesList } from '../../../utils/categories-list.utils'

const Categories = () => {
  const { push } = useRouter()
  const categories = useCallback(
    () => categoriesList.map((category) => category.toUpperCase()),
    [categoriesList]
  )

  const handleClick = (
    event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>,
    category: string
  ) => {
    const categoryToLowercase = category.toLowerCase()
    event.preventDefault()

    if (categoryToLowercase === `tudo`) {
      push(`/`)
      return
    }
    push(`/category/${categoryToLowercase}`)
  }

  return (
    <StyledContainer>
      <ul>
        {categories().map((category: string) => (
          <StyledButton
            css={{ borderRadius: `$full` }}
            onClick={(
              event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>
            ) => handleClick(event, category)}
            key={category}
          >
            {category}
          </StyledButton>
        ))}
      </ul>
    </StyledContainer>
  )
}

export default Categories
