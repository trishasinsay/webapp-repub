// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Graduate&family=Inter:wght@300&display=swap"
            href="https://fonts.googleapis.com/css2?family=Cookie&display=swap"
            href="https://fonts.gstatic.com" crossorigin>
            href="https://fonts.googleapis.com/css2?family=Gruppo&display=swap"
            rel="stylesheet"
            rel="preconnect"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
