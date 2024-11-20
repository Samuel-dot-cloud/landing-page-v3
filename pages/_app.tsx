import "../styles/globals";
import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/globals";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { dark, light } from "../styles/themes";
import { useEffect, useState } from "react";
import { ThemeContext } from "../components/use-theme";
import { Howler } from "howler";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<DefaultTheme>(light);
  const [isSoundOn, setIsSoundOn] = useState<boolean>(false);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const newTheme = currentTheme === light ? dark : light;
      localStorage.setItem("theme", JSON.stringify(newTheme));
      return newTheme;
    });
  };

  const toggleMode = () => {
    setIsSoundOn((prev) => {
      const next = !prev;
      localStorage.setItem("isSoundOn", JSON.stringify(next));
      return next;
    });
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(JSON.parse(storedTheme));
    }

    const storedSound = localStorage.getItem("isSoundOn");
    if (storedSound) {
      setIsSoundOn(JSON.parse(storedSound));
    }
  }, []);

  useEffect(() => {
    if (isSoundOn) {
      Howler.mute(false);
    } else {
      Howler.mute(true);
    }
  }, [isSoundOn]);

  return (
    <>
      <Head>
        <title>Samuel Wahome</title>
        <meta name="description" content="Samuel Wahome's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>

      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <ThemeContext.Provider
          value={{ theme, isSoundOn, toggleTheme, toggleMode }}
        >
          <Component {...pageProps} />
          <Analytics mode={"production"} />
        </ThemeContext.Provider>
      </ThemeProvider>
    </>
  );
}
