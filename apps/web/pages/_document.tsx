import { Html, Head, Main, NextScript } from "next/document";
import { ThemeController } from "ui";

export default function Document() {
  return (
    <Html>
      <Head />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
