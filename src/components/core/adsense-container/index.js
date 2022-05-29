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
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID}
        data-ad-layout="in-article"
        data-ad-slot="8331951788"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </Container>
  )
}

export default GoogleAdsenseContainer
