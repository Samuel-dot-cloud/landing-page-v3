import Carousel, { CarouselItem } from "../../components/carousel";
import {
  Box,
  Container,
  Section,
  SubText,
  SubTextLight,
  Title,
} from "./newsletters-section-elements";

const newsletterItems: CarouselItem[] = [
  {
    id: 1,
    image: "/newsletter/andrea.png",
  },
  {
    id: 2,
    image: "/newsletter/josh.jpeg",
  },
  {
    id: 3,
    image: "/newsletter/antoine.jpeg",
  },
  {
    id: 4,
    image: "/newsletter/farnam-street.png",
  },
  {
    id: 5,
    image: "/newsletter/indie-hackers.jpg",
  },
];

const NewslettersSection = () => {
  return (
    <Section>
      <Container>
        <Box>
          <Carousel items={newsletterItems} />
        </Box>
        <Box>
          <Title>Newsletters</Title>
          <SubText>
            If you&apos;re looking to gain insight into various topics, I highly
            recommend these newsletters that I subscribe to.
          </SubText>
          <SubTextLight>
            “Reading is essential for those who seek to rise above the
            ordinary.” - Jim Rohn
          </SubTextLight>
        </Box>
      </Container>
    </Section>
  );
};

export default NewslettersSection;
