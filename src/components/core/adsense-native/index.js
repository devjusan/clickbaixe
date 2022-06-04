import { useEffect, useRef } from 'react'
import { styled } from '../../../styles'

const AdNative = () => {
  // eslint-disable-next-line prettier/prettier
  const bannerRef = useRef(null)
  const AdLabel = styled('span', { fontSize: '$12' })

  useEffect(() => {
    if (!bannerRef.current.firstChild) {
      const conf = document.createElement('script')
      const script = document.createElement('script')
      script.setAttribute('async', 'async')
      script.setAttribute('data-cfasync', 'false')
      script.type = 'text/javascript'
      script.src = `//pl17338568.profitablecpmgate.com/a501430b60b5943ba9ff91187ce1c9ec/invoke.js`

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
        id="container-a501430b60b5943ba9ff91187ce1c9ec"
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

export default AdNative
