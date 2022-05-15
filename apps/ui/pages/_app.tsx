import { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import './styles.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #343d4b;
    font-family: 'Montserrat', sans-serif;
  }
`;

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
