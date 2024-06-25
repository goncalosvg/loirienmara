/* eslint-disable @next/next/next-script-for-ga */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="charset=utf-8" />

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
        <script
          defer
          src="https://resnova.resrequest.com/widget/js/app.js"
        ></script>
      </body>
    </Html>
  );
}
