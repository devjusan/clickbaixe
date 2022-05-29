import { useEffect } from 'react'
import { styled } from '../../../styles'

const GoogleAdsenseContainer = () => {
  const AdLabel = styled('span', { fontSize: '$12' })
  const Container = styled('div', {})

  useEffect(() => {
    // eslint-disable-next-line prettier/prettier
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, [])

  return (
    <Container style={{ textAlign: 'left', overflow: 'hidden' }}>
      <AdLabel>Anúncio</AdLabel>
      <amp-ad
        width="100vw"
        height="320"
        type="adsense"
        data-ad-client="ca-pub-8216675107406005"
        data-ad-slot="7516729417"
        data-auto-format="rspv"
        data-full-width=""
      >
        <div overflow=""> </div>
      </amp-ad>
    </Container>
  )
}

export default GoogleAdsenseContainer
