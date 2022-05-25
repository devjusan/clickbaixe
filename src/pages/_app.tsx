import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import Script from 'next/script';
import { Head } from 'next/document';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { globalStyles } from '../styles/global';
import { linkResolver, repositoryName } from '../../prismic.config';
import Header from '../components/core/header';
import Footer from '../components/core/footer';

globalStyles();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <Script
          id="Adsense-id"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8216675107406005"
          async
          strategy="afterInteractive"
          // eslint-disable-next-line no-console
          onError={(err) => console.log('Scripfailed to load: ', err)}
          crossOrigin="anonymous"
        />
      </Head>
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
  );
}

export default MyApp;
