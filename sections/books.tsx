import {Box, Container, Section, SubText, SubTextLight, Title} from "./tools-elements";
import Carousel, {CarouselItem} from "../components/carousel";
import {Autoplay, EffectCards, Navigation, Pagination} from "swiper";

const bookItems: CarouselItem[] = [
    {
        id: 1,
        image: "/books/ios-15.jpeg",
    },
    {
        id: 2,
        image: "/books/react-cookbook.jpeg",
    },
];

const Books = () => {
    return (
        <Section>
            <Container>
                <Box>
                    <Carousel modules={[EffectCards, Pagination, Navigation, Autoplay]} items={bookItems}/>
                </Box>
                <Box>
                    <Title>
                        Books
                    </Title>
                    <SubText>
                        Here are some cool books that I&apos;ve found and read.
                    </SubText>
                    <SubTextLight>
                        “Knowledge is power” – Francis Bacon
                    </SubTextLight>
                </Box>
            </Container>
        </Section>
    );
}

export default Books;