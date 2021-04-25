/* eslint-disable jsx-a11y/media-has-caption */
import { usePlayer } from '@/contexts/PlayerContext';
import { convertDurationToTimeString } from '@/utils/convertDurationToTimeString';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import {
  Buttons,
  CurrentEpisode,
  EmptySlider,
  FooterContainer,
  PlayButton,
  PlayerButton,
  PlayerContainer,
  PlayersEmpty,
  Progress,
  Slider,
  SliderBar
} from './styles';

export const Player = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const {
    episodeList,
    currentEpisodeIndex,
    isPlaying,
    isLooping,
    isShuffling,
    hasPrevious,
    hasNext,
    togglePlay,
    toggleLoop,
    toggleShuffle,
    setPlayingState,
    playNext,
    playPrevious,
    clearPlayerState
  } = usePlayer();

  const [actualTime, setActualTime] = useState(0);

  const episode = episodeList[currentEpisodeIndex];

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const setupProgressListener = () => {
    audioRef.current.currentTime = 0;

    if (episodeList.length) {
      audioRef.current.addEventListener('timeupdate', () => {
        setActualTime(Math.floor(audioRef.current.currentTime));
      });
    }
  };

  const handleSeek = (amount: number) => {
    audioRef.current.currentTime = amount;
    setActualTime(amount);
  };

  const handleEpisodeEnded = () => {
    if (hasNext) {
      playNext();
    } else {
      clearPlayerState();
      setActualTime(0);
    }
  };

  return (
    <PlayerContainer>
      <header>
        <img src="/playing.svg" alt="Tocando Agora" />
        <strong>Tocando agora</strong>
      </header>

      {episode ? (
        <CurrentEpisode>
          <Image
            width={592}
            height={592}
            src={episode.thumbnail}
            objectFit="cover"
          />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </CurrentEpisode>
      ) : (
        <PlayersEmpty>
          <strong>Selecione um podcast para ouvir</strong>
        </PlayersEmpty>
      )}

      <FooterContainer isEmpty={!episode}>
        <Progress>
          <span>{convertDurationToTimeString(actualTime)}</span>
          <Slider>
            {episode ? (
              <SliderBar
                value={actualTime}
                max={episode.duration}
                onChange={handleSeek}
              />
            ) : (
              <EmptySlider />
            )}
          </Slider>
          <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
        </Progress>

        {episode && (
          <audio
            src={episode.url}
            ref={audioRef}
            autoPlay
            loop={isLooping}
            onLoadedMetadata={setupProgressListener}
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
            onEnded={handleEpisodeEnded}
          />
        )}

        <Buttons>
          <PlayerButton
            type="button"
            isActive={isShuffling}
            onClick={toggleShuffle}
            disabled={!episode || episodeList.length <= 1}
          >
            <img src="/shuffle.svg" alt="Embaralhar" />
          </PlayerButton>
          <PlayerButton
            type="button"
            onClick={playPrevious}
            disabled={!episode || !hasPrevious}
          >
            <img src="/play-previous.svg" alt="Tocar anterior" />
          </PlayerButton>
          <PlayButton type="button" onClick={togglePlay} disabled={!episode}>
            {isPlaying ? (
              <img src="/pause.svg" alt="Tocar" />
            ) : (
              <img src="/play.svg" alt="Tocar" />
            )}
          </PlayButton>
          <PlayerButton
            type="button"
            onClick={playNext}
            disabled={!episode || !hasNext}
          >
            <img src="/play-next.svg" alt="Tocar próxima" />
          </PlayerButton>
          <PlayerButton
            type="button"
            isActive={isLooping}
            onClick={toggleLoop}
            disabled={!episode}
          >
            <img src="/repeat.svg" alt="Repetir" />
          </PlayerButton>
        </Buttons>
      </FooterContainer>
    </PlayerContainer>
  );
};
