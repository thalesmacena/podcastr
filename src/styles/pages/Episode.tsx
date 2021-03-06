import styled from 'styled-components';

export const EpisodeContainer = styled.div`
  max-width: 45rem;
  padding: 3rem 2rem;
  margin: 0 auto;

  header {
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};

    h1 {
      margin-top: 2rem;
      margin-bottom: 1.5rem;
    }

    span {
      display: inline-block;
      font-size: 0.875rem;

      & + span {
        margin-left: 1rem;
        padding-left: 1rem;
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
  }
`;

export const ThumbnailContainer = styled.div`
  position: relative;

  img {
    border-radius: 1rem;
  }

  button {
    width: 3rem;
    height: 3rem;
    border-radius: 0.75rem;
    border: 0;
    position: absolute;
    z-index: 5;
    font-size: 0;

    transition: 0.2s;

    &:first-child {
      left: 0;
      top: 50%;
      background: ${({ theme }) => theme.colors.purple500};
      transform: translate(-50%, -50%);
    }

    &:last-child {
      right: 0;
      top: 50%;
      background: ${({ theme }) => theme.colors.green500};
      transform: translate(50%, -50%);
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Description = styled.div`
  margin-top: 2rem;
  line-height: 1.675rem;
  color: ${({ theme }) => theme.colors.heading};

  p {
    margin: 1.5rem 0;
  }
`;
