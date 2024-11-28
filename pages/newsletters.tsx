import { NextPage } from "next";
import Navigation from "../components/navigation";
import NewslettersSection from "../sections/newsletters/newsletters-section";
import { Main } from "../components/back-button-elements";
import BackButton from "../components/back-button";

const Newsletters: NextPage = () => {
  return (
    <Main>
      <Navigation isGlobal={true} />
      <BackButton />
      <NewslettersSection />
    </Main>
  );
};

export default Newsletters;
