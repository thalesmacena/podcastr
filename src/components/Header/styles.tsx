import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;

  background: ${({ theme }) => theme.colors.lighten};
  height: 6.5rem;

  display: flex;
  align-items: center;
  padding: 2rem 4rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.line};

  p {
    margin-left: 2rem;
    padding: 0.25rem 0 0.25rem 2rem;
    border-left: 1px solid ${({ theme }) => theme.colors.line};
  }

  span {
    margin-left: auto;
    text-transform: capitalize;
  }
`;
