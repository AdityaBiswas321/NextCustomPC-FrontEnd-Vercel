import Document, { Html, Head, Main, NextScript } from "next/document";

//Google Analytics

export default class MyDocument extends Document {
  render() {
    return (
      // ...
      <Html lang="en">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-B5DSD0XD0G"
          ></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-B5DSD0XD0G');`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
