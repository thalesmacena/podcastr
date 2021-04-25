import { usePlayer } from '@/contexts/PlayerContext';
import { api } from '@/services/api';
import {
  Description,
  EpisodeContainer,
  ThumbnailContainer
} from '@/styles/pages/Episode';
import { convertDurationToTimeString } from '@/utils/convertDurationToTimeString';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

type IEpisode = {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  members: string;
  publishedAt: string;
  url: string;
  duration: number;
  durationAsString: string;
};

interface IEpisodeProps {
  episode: IEpisode;
}

const Episode = ({ episode }: IEpisodeProps) => {
  const { play } = usePlayer();
  return (
    <>
      <Head>
        <title>{episode.title}</title>
      </Head>
      <EpisodeContainer>
        <ThumbnailContainer>
          <Link href="/">
            <button type="button">
              <img src="/arrow-left.svg" alt="Voltar" />
            </button>
          </Link>
          <Image
            width={700}
            height={160}
            src={episode.thumbnail}
            objectFit="cover"
          />
          <button type="button" onClick={() => play(episode)}>
            <img src="/play.svg" alt="Tocar episódio" />
          </button>
        </ThumbnailContainer>

        <header>
          <h1>{episode.title}</h1>
          <span>{episode.members}</span>
          <span>{episode.publishedAt}</span>
          <span>{episode.durationAsString}</span>
        </header>

        <Description
          dangerouslySetInnerHTML={{ __html: episode.description }}
        />
      </EpisodeContainer>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 2,
      _sort: 'published_at',
      _order: 'desc'
    }
  });

  const paths = data.map((episode) => ({
    params: {
      episode: episode.id
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { episode } = ctx.params;
  const { data } = await api.get(`/episodes/${episode}`);

  const episodeData = {
    id: data.id,
    title: data.title,
    thumbnail: data.thumbnail,
    members: data.members,
    publishedAt: format(parseISO(data.published_at), 'd MMM yy', {
      locale: ptBR
    }),
    duration: Number(data.file.duration),
    durationAsString: convertDurationToTimeString(Number(data.file.duration)),
    description: data.description,
    url: data.file.url
  };
  return {
    props: {
      episode: episodeData
    },
    revalidate: 60 * 60 * 24 // 24h
  };
};

export default Episode;
