import Carousel, {CarouselItem} from "../../components/carousel";
import {Box, Container, Section, SubText, SubTextLight, Title} from "./newsletters-section-elements";
import {Autoplay, EffectCards, Navigation, Pagination} from "swiper";

const newsletterItems: CarouselItem[] = [
    {
        id: 1,
        image: "/newsletter/andrea.png",
    },
    {
        id: 2,
        image: "/newsletter/josh.jpeg",
    },
];

const NewslettersSection = () => {
    return (
        <Section>
            <Container>
                <Box>
                    <Carousel modules={[EffectCards, Pagination, Navigation, Autoplay]} items={newsletterItems}/>
                </Box>
                <Box>
                    <Title>
                      Newsletters
                    </Title>
                    <SubText>
                        If you&apos;re looking to enhance your dev skills, I highly recommend these newsletters that I subscribe to.
                    </SubText>
                    <SubTextLight>
                        “Reading is essential for those who seek to rise above the ordinary.” - Jim Rohn
                    </SubTextLight>
                </Box>
            </Container>
        </Section>
    );
}

export default NewslettersSection;