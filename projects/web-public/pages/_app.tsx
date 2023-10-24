import type { AppProps } from "next/app";
import {
  ThemeProvider,
  DefaultTheme,
  createGlobalStyle,
} from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

const theme: DefaultTheme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
