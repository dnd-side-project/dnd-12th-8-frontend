import '@/styles/globals.css';
import { IBM_Plex_Sans } from 'next/font/google';
import localFont from 'next/font/local';
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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${pretendard.variable} ${ibmPlexSans.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
