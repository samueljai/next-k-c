import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import GlobalLayout from '../components/Layout/GlobalLayout';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <GlobalLayout>
            <Component {...pageProps} />
        </GlobalLayout>
    );
}

export default MyApp;
