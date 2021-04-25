import SliderComponent from 'rc-slider';
import 'rc-slider/assets/index.css';
import styled, { css } from 'styled-components';

export const PlayerContainer = styled.div`
  width: 26.5rem;
  padding: 3rem 4rem;
  position: sticky;
  top: 0;

  background: ${({ theme }) => theme.colors.purple500};
  color: ${({ theme }) => theme.colors.lighten};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  strong {
    font: 600 'Lexend', sans-serif;
  }

  footer {
    align-self: stretch;
  }
`;

export const CurrentEpisode = styled.div`
  text-align: center;

  img {
    border-radius: 1.5rem;
  }

  strong {
    display: block;
    margin-top: 2rem;
    font: 600 1.25rem Lexend, sans-serif;
    line-height: 1.75rem;
  }

  span {
    display: block;
    margin-top: 1rem;
    opacity: 0.6rem;
    line-height: 1.5rem;
  }
`;

export const PlayersEmpty = styled.div`
  width: 100%;
  height: 20rem;
  padding: 4rem;

  border: 1.5px dashed ${({ theme }) => theme.colors.purple300};
  border-radius: 1.5rem;
  background: ${({ theme }) => theme.podcastImageBackground};

  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

interface IEmpty {
  isEmpty: boolean;
}

export const FooterContainer = styled.footer<IEmpty>`
  Progress {
    opacity: ${({ isEmpty }) => isEmpty && '0.6'};
  }
`;

export const Progress = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;

  span {
    display: inline-block;
    width: 4rem;
    text-align: center;
  }
`;

export const Slider = styled.div`
  flex: 1;
`;

export const SliderBar = styled(SliderComponent).attrs(({ theme }) => ({
  trackStyle: { backgroundColor: theme.colors.green500 },
  railStyle: { backgroundColor: theme.colors.purple300 },
  handleStyle: { borderColor: theme.colors.green500 }
}))``;

export const EmptySlider = styled.div`
  width: 100%;
  height: 4px;
  background: ${({ theme }) => theme.colors.purple300};
  border-radius: 2px;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 1.5rem;

  button {
    background: transparent;
    border: 0;
    font-size: 0;
    transition: filter 0.2s;

    &:hover:not(:disabled) {
      filter: brightness(0.7);
    }

    &:disabled {
      cursor: default;
      filter: brightness(0.7);
    }
  }
`;

interface IPlayerButton {
  isActive?: boolean;
}

export const PlayerButton = styled.button<IPlayerButton>`
  ${({ isActive }) =>
    isActive &&
    css`
      filter: invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);

      &:hover {
        filter: brightness(0.6) invert(0.35) sepia(1) saturate(3)
          hue-rotate(100deg);
      }

      &::after {
        position: absolute;
        right: 0.5rem;
        top: 1.5rem;
        width: 0.5rem;
        height: 0.5rem;
        background: ${({ theme }) => theme.colors.green500};
        content: '';
        border-radius: 50%;
      }
    `};
`;

export const PlayButton = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.purple400} !important;

  &:hover:not(:disabled) {
    filter: brightness(0.95) !important;
  }
`;
