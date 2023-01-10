import Head from 'next/head'
import {GlobalStyles} from "../styles/globals";
import {ThemeProvider} from "styled-components";
import {light} from "../styles/themes";
import Navigation from "../components/navigation";
import Top from "../sections/home";
import About from "../sections/about";


export default function Home() {
  return (
    <>
      <Head>
        <title>Samuel Wahome</title>
        <meta name="description" content="Samuel Wahome's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <GlobalStyles />
        <ThemeProvider theme={light}>
            <Navigation/>
            <Top/>
            <About/>
        </ThemeProvider>
      </main>
    </>
  )
}
