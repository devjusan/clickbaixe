import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { globalStyles } from '../styles/global'
import { linkResolver, repositoryName } from '../../prismic.config'
import Header from '../components/core/header'
import Footer from '../components/core/footer'

globalStyles()
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }) => (
          <Link href={href}>
            <a {...props}>{children}</a>
          </Link>
        )}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </PrismicPreview>
      </PrismicProvider>
    </>
  )
}

export default MyApp
