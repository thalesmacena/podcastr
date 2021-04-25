import styled from 'styled-components';

export const ThemeSlider = styled.label`
  margin-left: 2rem;
  height: 2rem;
  width: 4rem;

  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.dot};

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

interface IThemeIco {
  checked: boolean;
}

export const ThemeIco = styled.span<IThemeIco>`
  position: absolute;
  cursor: pointer;
  transition: 0.4s;

  ${({ checked }) => !checked && 'transform: translateX(2rem)}'};

  svg {
    position: relative;
    border: 2px solid ${({ theme }) => theme.colors.switch};
    padding: 5px;
    background: ${({ theme }) => theme.colors.line};
    border-radius: 1rem;
  }
`;
