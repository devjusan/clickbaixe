import { useEffect, useRef } from 'react'
import { styled } from '../../../styles'

const AdBanner = () => {
  // eslint-disable-next-line prettier/prettier
  const bannerRef = useRef(null)
  const AdLabel = styled('span', { fontSize: '$12' })
  const atOptions = {
    key: 'bee98093389fb0354bfeed745bfd216a',
    format: 'iframe',
    height: 90,
    width: 728,
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
      <div
        ref={bannerRef}
        style={{
          width: '100%',
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      />
    </>
  )
}

export default AdBanner
