import type { AppProps } from 'next/app';
import useColorSchemeBodyClass from '../hooks/useColorSchemeBodyClass';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useColorSchemeBodyClass();

  return <Component {...pageProps} />;
}

export default MyApp;
