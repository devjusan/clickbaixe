import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../styles';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link href="../../public/favicon.png" type="image/png" />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          ></style>
        </Head>
        <body>
          <Main /> <NextScript />
        </body>
      </Html>
    );
  }
}
