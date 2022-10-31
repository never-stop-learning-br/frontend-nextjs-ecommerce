import type { AppProps } from "next/app";
import { globalStyles } from "styles/config/stitches";

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return <Component {...pageProps} />;
}
