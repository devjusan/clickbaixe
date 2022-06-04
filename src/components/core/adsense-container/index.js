import { useEffect, useRef } from 'react'
import { styled } from '../../../styles'

const GoogleAdsenseContainer = () => {
  const StyledContainer = styled('div', {
    display: 'flex',
    flexFlow: 'column wrap',
    alignContent: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    textAlign: 'center',
  })

  // eslint-disable-next-line prettier/prettier
  const bannerRef = useRef(null)
  const AdLabel = styled('span', { fontSize: '$12' })
  const atOptions = {
    key: '455ac575aebe25a9e60e2e8a032c6abe',
    format: 'iframe',
    height: 250,
    width: 300,
    params: {},
  }

  useEffect(() => {
    if (!bannerRef.current.firstChild) {
      const conf = document.createElement('script')
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `//www.highperformancedformats.com/${atOptions.key}/invoke.js`
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`

      if (bannerRef.current) {
        bannerRef.current.append(conf)
        bannerRef.current.append(script)
      }
    }
  }, [])

  return (
    <>
      {' '}
      <AdLabel>Anúncio</AdLabel>
      <StyledContainer ref={bannerRef} />
    </>
  )
}

export default GoogleAdsenseContainer
