import Head from 'next/head'
import {GlobalStyles} from "../styles/globals";
import {ThemeProvider} from "styled-components";
import {light} from "../styles/themes";
import Navigation from "../components/navigation";
import Top from "../sections/home";
import Tools from "../sections/tools";
import About from "../sections/about";
import Stack from "../sections/stack";
import Experience from "../sections/experience";
import Books from "../sections/books";
import Podcasts from "../sections/podcasts";
import Projects from '../sections/projects';
import Footer from "../sections/footer";


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
            {/*<Stack/>*/}
            <Experience/>
            {/*<Tools/>*/}
            <Books/>
            <Podcasts/>
            <Projects/>
            <Footer/>
        </ThemeProvider>
      </main>
    </>
  )
}
