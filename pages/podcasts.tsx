import {NextPage} from "next";
import PodcastsSection from "../sections/podcasts/podcasts-section";
import Navigation from "../components/navigation";

const Podcasts: NextPage = () => {
    return (
        <main>
            <Navigation isGlobal={true}/>
            <PodcastsSection/>
        </main>
    );
}

export default Podcasts;