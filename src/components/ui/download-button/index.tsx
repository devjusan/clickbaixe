import { useEffect, useState } from 'react'
import Button from '../button'
import { StyledContainer } from './styled'

interface IDownloadButton {
  href: string
  registerHref: string | null
  hasClickInAd: boolean
}

const DownloadButton = ({
  href,
  registerHref,
  hasClickInAd,
}: IDownloadButton) => {
  const [timer, setTimer] = useState(45 * 1000)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((state) => state - 1000)
    }, 1000)

    if (hasClickInAd) {
      setTimer(0)
    }

    if (timer === 0) {
      clearInterval(interval)
    }

    return () => {
      clearInterval(interval)
    }
  }, [timer, hasClickInAd])

  return (
    <StyledContainer>
      {timer === 0 ? (
        <>
          <Button href={href} width={400}>
            baixe agora!
          </Button>
          {registerHref && (
            <Button href={registerHref} width={400}>
              chave de registro
            </Button>
          )}
        </>
      ) : (
        <p>
          Aguarde <strong>{timer / 1000}</strong>{' '}
          {timer === 1 ? 'segundo' : 'segundos'} para o seu download ou clique
          em um anúncio para baixar agora.
        </p>
      )}
    </StyledContainer>
  )
}

export default DownloadButton
