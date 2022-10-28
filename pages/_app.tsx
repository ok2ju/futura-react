import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { nav, menu } from '../constants/menu';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout nav={nav} menu={menu}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
