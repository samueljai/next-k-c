import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import GlobalLayout from '../components/Layout/GlobalLayout';
import { RootStoreProvider } from '../providers/RootStoreProvider';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RootStoreProvider hydrationData={pageProps.hydrationData}>
            <GlobalLayout>
                <Component {...pageProps} />
            </GlobalLayout>
        </RootStoreProvider>
    );
}

export default MyApp;
