import Head from 'next/head'
import Navigation from "../components/navigation";
import Top from "../sections/home";
import About from "../sections/about";
import Experience from "../sections/experience";
import Projects from '../sections/projects';
import Footer from "../sections/footer";
import ScrollToTop from "../components/scroll-to-top";


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
            <Navigation/>
            <Top/>
            <About/>
            <Experience/>
            <Projects/>
            <Footer/>
            <ScrollToTop/>
      </main>
    </>
  )
}
