import {NextPage} from "next";
import Navigation from "../components/navigation";
import PodcastsSection from "../sections/podcasts/podcasts-section";
import NewslettersSection from "../sections/newsletters/newsletters-section";

const Newsletters: NextPage = () => {
    return (
        <main>
            <Navigation isGlobal={true}/>
            <NewslettersSection/>
        </main>
    );
}

export default Newsletters;