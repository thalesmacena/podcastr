import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  
  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  /*
  html, body, #__next {
    
  }
  */

  body {
    -webkit-font-smoothing: antialiased;
    background: ${({ theme }) => theme.colors.shape};
  }

  body, input, button {
    font: 400 0.875rem 'Inter', sans-serif;
    color: ${({ theme }) => theme.colors.bodyMedium};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    font-family: 'Lexend', sans-serif;
    color: ${({ theme }) => theme.colors.heading}
  }

  h1 {
    font-size: 2rem;
  }

  h2 { 
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
