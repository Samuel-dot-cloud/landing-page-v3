import {Box, Container, Section, SubText, SubTextLight, Title} from "./tools-elements";
import Carousel, {CarouselItem} from "../components/carousel";
import {Autoplay, EffectCards, Navigation, Pagination} from "swiper";

const podcastItems: CarouselItem[] = [
    {
        id: 1,
        image: "/podcast/codenewbie.jpg",
    },
    {
        id: 2,
        image: "/podcast/coffee_coding_pod.png",
    },
    {
        id: 3,
        image: "/podcast/swift-by-sundell.jpg",
    },
    {
        id: 4,
        image: "/podcast/syntax.jpg",
    },
];

const Podcasts = () => {
    return (
        <Section>
            <Container>
                <Box>
                    <Carousel modules={[EffectCards, Pagination, Navigation, Autoplay]} items={podcastItems}/>
                </Box>
                <Box>
                    <Title>
                        Podcasts
                    </Title>
                    <SubText>
                        Here are some podcasts I listen to with interesting takes on several topics.
                    </SubText>
                    <SubTextLight>
                        “I remind myself every morning: Nothing I say this day will teach me anything. So if I’m going to learn, I must do it by listening.” ― Larry King
                    </SubTextLight>
                </Box>
            </Container>
        </Section>
    );
}

export default Podcasts;