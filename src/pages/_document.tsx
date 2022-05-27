/* eslint-disable react/no-danger */
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../styles'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Benne&family=Montserrat:wght@300;400;500&display=swap"
            rel="stylesheet"
          />
          <link href="../../public/favicon.png" type="image/png" />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main /> <NextScript />
        </body>
      </Html>
    )
  }
}
