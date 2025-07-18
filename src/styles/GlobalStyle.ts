import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Segoe UI', sans-serif;
    background: #f9f9f9;
    color: #333;
    height: 100%;
    width: 100%;
    
    background-color: ${({ theme }) => theme.colors.background};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  h1, h2, h3 {
    font-weight: 600;
  }

  ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

`;
