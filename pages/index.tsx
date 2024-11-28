import Navigation from "../components/navigation";
import Top from "../sections/home/home";
import Experience from "../sections/experience/experience";
import Projects from "../sections/projects/projects";
import Footer from "../sections/footer/footer";
import ScrollToTop from "../components/scroll-to-top";

export default function Home() {
  return (
    <main>
      <Navigation isGlobal={false} />
      <Top />
      <Experience />
      <Projects />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
