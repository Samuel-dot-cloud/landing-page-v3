import {Box, Container, Section, SubText, SubTextLight, Title} from "./tools-elements"
import Carousel, {CarouselItem} from "../components/carousel";
import {Autoplay, EffectCards, Navigation, Pagination} from "swiper";

const toolItems: CarouselItem[] = [
    {
        id: 1,
        image: "/android-studio.svg",
    },
    {
        id: 2,
        image: "/postman.svg",
    },
    {
        id: 3,
        image: "/vs.svg",
    },
    {
        id: 4,
        image: "/webstorm.svg",
    },
    {
        id: 5,
        image: "/xcode.png",
    },
];

const Tools = () => {
    return (
        <Section>
            <Container>
                <Box>
                    <Carousel modules={[EffectCards, Pagination, Navigation, Autoplay]} items={toolItems}/>
                </Box>
                <Box>
                    <Title>
                        Tools of Trade
                    </Title>
                    <SubText>
                        Here&apos;s what I use on a day to day basis.
                    </SubText>
                    <SubTextLight>
                        “I’ve finally learned what ‘upward compatible’ means. It means we get to keep all our old
                        mistakes.” - Dennie van Tassel
                    </SubTextLight>
                </Box>
            </Container>
        </Section>
    )
}

export default Tools