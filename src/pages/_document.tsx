import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script
          defer
          src="https://resnova.resrequest.com/widget/js/app.js"
        ></script>
      </body>
    </Html>
  )
}
