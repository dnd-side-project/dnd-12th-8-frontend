import '@/styles/globals.css';
import { ReactElement, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { NextPage } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import getPageLayout from '@/components/@shared/layout/Layout';
import type { AppProps } from 'next/app';

export const pretendard = localFont({
  src: '../styles/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps, router }: AppPropsWithLayout) {
  const queryClient = new QueryClient();
  const getLayout = Component.getLayout ?? ((page) => getPageLayout(page, router.pathname));

  return (
    <QueryClientProvider client={queryClient}>
      <main className={`${pretendard.variable} ${ibmPlexSans.variable} font-sans`}>
        {getLayout(<Component {...pageProps} />)}
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
