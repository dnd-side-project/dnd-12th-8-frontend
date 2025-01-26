import '@/styles/globals.css';

import { IBM_Plex_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import type { AppProps } from 'next/app';

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
});

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${ibmPlexSans.variable} ${pretendard.variable} grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 sm:p-20`}
    >
      <Component {...pageProps} />
    </div>
  );
}
