import { LoaderSpin } from '@/components/LoaderSpin';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';

export const InfiniteScrollContainer = styled(InfiniteScroll)`
  padding: 0 2rem;
  height: calc(100vh - 6.5rem);
  max-width: calc(100vw - 26.5rem);
  overflow-y: scroll;

  h2 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }
`;

export const LatestEpisodes = styled.section`
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
`;

export const EpisodesElement = styled.li`
  background: ${({ theme }) => theme.colors.lighten};
  border: 1px solid ${({ theme }) => theme.colors.line};
  padding: 1.25rem;
  border-radius: 1.5rem;
  position: relative;

  display: flex;
  align-items: center;

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 1rem;
  }

  button {
    position: absolute;
    right: 2rem;
    bottom: 2rem;

    width: 2.5rem;
    height: 2.5rem;
    background: ${({ theme }) => theme.colors.lighten};
    border: 1px solid ${({ theme }) => theme.colors.line};
    border-radius: 0.675rem;

    font-size: 0;

    transition: 0.2s;

    &:hover {
      background: ${({ theme }) => theme.buttonHover};
    }

    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const EpisodeDetail = styled.div`
  flex: 1;
  margin-left: 1rem;

  a {
    display: block;
    color: ${({ theme }) => theme.colors.heading};
    font: 600 'Lexend', sans-serif;
    line-height: 1.4rem;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    font-size: 0.875rem;
    margin-top: 0.5rem;
    max-width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    display: inline-block;
    margin-top: 0.5rem;
    font-size: 0.875rem;

    &:last-child {
      margin-left: 0.5rem;
      padding-left: 0.5rem;
      position: relative;

      &::before {
        content: '';
        width: 4px;
        height: 4px;
        border-radius: 2px;
        background: ${({ theme }) => theme.colors.dot};
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;

export const LoadingSpin = styled(LoaderSpin).attrs((props) => ({
  color: props.theme.colors.purple300
}))``;

export const AllEpisodes = styled.section`
  padding-bottom: 2rem;

  table {
    width: 100%;

    th,
    td {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid ${({ theme }) => theme.colors.line};
    }

    th {
      color: ${({ theme }) => theme.colors.body};
      text-transform: uppercase;
      font: 500 0.75rem Lexend, sans-serif;
      text-align: left;
    }

    td {
      font-size: 0.875rem;

      img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0.5rem;
      }

      a {
        color: ${({ theme }) => theme.colors.heading};
        font: 600 1rem Lexend, sanf-serif;
        line-height: 1.4rem;
        &:hover {
          text-decoration: underline;
        }
      }

      button {
        width: 2rem;
        height: 2rem;
        background: ${({ theme }) => theme.colors.lighten};
        border: 1px solid ${({ theme }) => theme.colors.line};
        border-radius: 0.5rem;

        font-size: 0;

        transition: 0.2s;

        &:hover {
          background: ${({ theme }) => theme.buttonHover};
        }

        img {
          width: 1.25rem;
          height: 1.25rem;
        }
      }
    }
  }
`;
