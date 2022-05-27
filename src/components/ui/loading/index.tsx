import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { StyledContainer, StyledLoading } from './styled'

interface ILoading {
  force?: boolean
}

const Loading = ({ force }: ILoading) => {
  const { asPath, events } = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url: string) => url !== asPath && setLoading(true)
    const handleComplete = (url: string) => url === asPath && setLoading(false)

    events.on('routeChangeStart', handleStart)
    events.on('routeChangeComplete', handleComplete)
    events.on('routeChangeError', handleComplete)

    return () => {
      events.off('routeChangeStart', handleStart)
      events.off('routeChangeComplete', handleComplete)
      events.off('routeChangeError', handleComplete)
    }
  })

  if (force) {
    return (
      <StyledContainer>
        <StyledLoading />
      </StyledContainer>
    )
  }

  return loading ? (
    <StyledContainer>
      <StyledLoading />
    </StyledContainer>
  ) : (
    <></>
  )
}

export default Loading
