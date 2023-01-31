import {Box, Container, Section, SubText, SubTextLight, Title} from "./tools-elements"
import Carousel, {CarouselItem} from "../components/carousel";
import {Autoplay, EffectCards, Navigation, Pagination} from "swiper";

const toolItems: CarouselItem[] = [
    {
        id: 1,
        image: "/android-studio.svg",
        title: "Android Studio",
        subTitle: "Android Studio is Android's official IDE.",
    },
    {
        id: 2,
        image: "/postman.svg",
        title: "Postman",
        subTitle: "Postman is an API platform for building and using APIs.",
    },
    {
        id: 3,
        image: "/vs.svg",
        title: "Visual Studio Code",
        subTitle: "Visual Studio Code is a code editor for modern web & cloud app development.",
    },
    {
        id: 4,
        image: "/webstorm.svg",
        title: "Webstorm",
        subTitle: "WebStorm is an integrated development environment for JavaScript and related technologies.",
    },
    {
        id: 5,
        image: "/xcode.png",
        title: "Xcode",
        subTitle: "Xcode is Apple's dev environment for software on macOS, iOS, iPadOS, watchOS, tvOS.",
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