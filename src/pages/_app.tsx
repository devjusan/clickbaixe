import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { globalStyles } from '../styles/global';
import { linkResolver, repositoryName } from '../../prismic.config';
import type { AppProps } from 'next/app';
import Link from 'next/link';

globalStyles();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}></a>
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />{' '}
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default MyApp;
