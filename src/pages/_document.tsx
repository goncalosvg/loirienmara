/* eslint-disable @next/next/next-script-for-ga */
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>LOIRIEN Mara | Discover the essence of the Mara.</title>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="charset=utf-8" />

        <link
          rel="icon"
          type="image/png"
          href="/favicon.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
            href="/favicon.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon.png"
          sizes="96x96"
        />

        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon.png"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZPLTY44LWH"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-ZPLTY44LWH', { page_path: window.location.pathname });
                `,
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
