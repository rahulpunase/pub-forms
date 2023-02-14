import { GlobalStyles, ThemeController } from "ui";

export default function _app({ Component, pageProps }: any) {
  return (
    <ThemeController>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeController>
  );
}
