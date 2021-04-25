import { usePlayer } from '@/contexts/PlayerContext';
import { api } from '@/services/api';
import {
  AllEpisodes,
  EpisodeDetail,
  EpisodesElement,
  InfiniteScrollContainer,
  LatestEpisodes,
  LoadingSpin
} from '@/styles/pages/Home';
import { convertDurationToTimeString } from '@/utils/convertDurationToTimeString';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Episode = {
  id: string;
  title: string;
  thumbnail: string;
  members: string;
  publishedAt: string;
  url: string;
  duration: number;
  durationAsString: string;
};

type HomeProps = {
  latestEpisodes: Episode[];
  allEpisodes: Episode[];
};

export default function Home({ latestEpisodes, allEpisodes }: HomeProps) {
  const { playList, currentEpisodeIndex, episodeList } = usePlayer();
  const [episodesList, setEpisodesList] = useState<Episode[]>(allEpisodes);
  const [episodesQueue, setEpisodesQueue] = useState<Episode[]>([
    ...latestEpisodes,
    ...episodesList
  ]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPages] = useState<number>(2);

  const handleInfiniteScroll = async () => {
    setPages(page + 1);

    const response = await api.get('episodes', {
      params: {
        _limit: 12,
        _sort: 'published_at',
        _order: 'desc',
        _page: page
      }
    });

    if (!response.data.length) {
      setHasMore(false);
      return;
    }

    const episodes = response.data.map((episode) => {
      return {
        id: episode.id,
        title: episode.title,
        thumbnail: episode.thumbnail,
        members: episode.members,
        publishedAt: format(parseISO(episode.published_at), 'd MMM yy', {
          locale: ptBR
        }),
        duration: Number(episode.file.duration),
        durationAsString: convertDurationToTimeString(
          Number(episode.file.duration)
        ),
        url: episode.file.url
      };
    });

    const newEpisodes = [...episodesList, ...episodes];
    setEpisodesList(newEpisodes);
  };

  useEffect(() => {
    setEpisodesQueue([...latestEpisodes, ...episodesList]);
  }, [episodesList, latestEpisodes]);

  return (
    <>
      <Head>
        <title>
          {episodeList[currentEpisodeIndex]
            ? `Podcastr | Tocando: ${episodeList[currentEpisodeIndex].title}`
            : 'Podcastr | Home'}
        </title>
      </Head>
      <InfiniteScrollContainer
        dataLength={episodesList.length}
        next={handleInfiniteScroll}
        height="calc(100vh - 6.5rem)"
        hasMore={hasMore}
        loader={
          <p style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <LoadingSpin size={50} spinWidth={3} />
          </p>
        }
        endMessage={
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <b>Fala Dev! Não existem episódios mais antigos!</b>
          </p>
        }
      >
        <LatestEpisodes>
          <h2>últimos lançamentos</h2>

          <ul>
            {latestEpisodes.map((episode, index) => {
              return (
                <EpisodesElement key={episode.id}>
                  <Image
                    width={192}
                    height={192}
                    src={episode.thumbnail}
                    alt={episode.title}
                    objectFit="cover"
                  />

                  <EpisodeDetail>
                    <Link href={`/episodes/${episode.id}`}>
                      <a>{episode.title}</a>
                    </Link>
                    <p>{episode.members}</p>
                    <span>{episode.publishedAt}</span>
                    <span>{episode.durationAsString}</span>
                  </EpisodeDetail>

                  <button
                    type="button"
                    onClick={() => playList(episodesQueue, index)}
                  >
                    <img src="/play-green.svg" alt="Tocar Episódio" />
                  </button>
                </EpisodesElement>
              );
            })}
          </ul>
        </LatestEpisodes>

        <AllEpisodes>
          <h2>Todos os episódios</h2>

          <table cellSpacing={0}>
            <thead>
              <tr>
                <th />
                <th>Podcast</th>
                <th>Integrantes</th>
                <th>Data</th>
                <th>Duração</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {episodesList.map((episode, index) => {
                return (
                  <tr key={episode.id}>
                    <td style={{ width: 72 }}>
                      <Image
                        width={120}
                        height={120}
                        src={episode.thumbnail}
                        alt={episode.title}
                        objectFit="cover"
                      />
                    </td>
                    <td>
                      <Link href={`/episodes/${episode.id}`}>
                        <a>{episode.title}</a>
                      </Link>
                    </td>
                    <td>{episode.members}</td>
                    <td style={{ width: 100 }}>{episode.publishedAt}</td>
                    <td>{episode.durationAsString}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() =>
                          playList(episodesQueue, index + latestEpisodes.length)
                        }
                      >
                        <img src="/play-green.svg" alt="Tocar Episódio" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </AllEpisodes>
      </InfiniteScrollContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc',
      _page: 1
    }
  });

  const { data } = response;

  const episodes = data.map((episode) => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', {
        locale: ptBR
      }),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(
        Number(episode.file.duration)
      ),
      url: episode.file.url
    };
  });

  const latestEpisodes = episodes.slice(0, 2);
  const allEpisodes = episodes.slice(2, episodes.length);

  return {
    props: {
      latestEpisodes,
      allEpisodes
    },
    revalidate: 60 * 60 * 8
  };
};
