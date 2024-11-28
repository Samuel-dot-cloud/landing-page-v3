import { NextPage } from "next";
import PodcastsSection from "../sections/podcasts/podcasts-section";
import Navigation from "../components/navigation";
import { Main } from "../components/back-button-elements";
import BackButton from "../components/back-button";

const Podcasts: NextPage = () => {
  return (
    <Main>
      <Navigation isGlobal={true} />
      <BackButton />
      <PodcastsSection />
    </Main>
  );
};

export default Podcasts;
