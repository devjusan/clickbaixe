import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { StyledContainer, StyledInput, StyledImageContainer } from './styled'
import searchImg from '../../../assets/search.svg'

interface IInputProps {
  isMobile?: boolean
}

const InputSearch = ({ isMobile }: IInputProps) => {
  const { push } = useRouter()
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event: any) => {
    event.preventDefault?.()
    let value = event?.target?.value
    if (!value) {
      value = ''
    }
    setInputValue(value)
  }

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (!inputValue || !inputValue.length) return

    push({ pathname: '/search/[slug]', query: { slug: inputValue } })
    setInputValue('')
  }

  return (
    <StyledContainer
      className={isMobile ? 'is-mobile' : ''}
      onSubmit={handleSubmit}
    >
      <StyledInput
        type="text"
        onChange={handleInputChange}
        value={inputValue}
        placeholder="Busque em nosso site"
      />
      <StyledImageContainer>
        <Image priority={false} src={searchImg} />
      </StyledImageContainer>
    </StyledContainer>
  )
}

export default InputSearch
