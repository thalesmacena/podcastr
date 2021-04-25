import { Header } from '@/components/Header';
import { Player } from '@/components/Player';
import { PlayerProvider } from '@/contexts/PlayerContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { AppWrapper } from '@/styles/app';
import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Podcastr</title>
      </Head>
      <ThemeProvider>
        <PlayerProvider>
          <AppWrapper>
            <main>
              <Header />
              <Component {...pageProps} />
            </main>
            <Player />
          </AppWrapper>
        </PlayerProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
