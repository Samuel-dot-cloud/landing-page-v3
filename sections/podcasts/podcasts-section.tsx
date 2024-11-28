import Carousel, { CarouselItem } from "../../components/carousel";
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper";
import {
  Box,
  Container,
  Section,
  SubText,
  SubTextLight,
  Title,
} from "./podcasts-section-elements";

const podcastItems: CarouselItem[] = [
  {
    id: 1,
    image: "/podcast/dwarkesh.webp",
  },
  {
    id: 2,
    image: "/podcast/freecodecamp.webp",
  },
  {
    id: 3,
    image: "/podcast/knowledge-project.webp",
  },
  {
    id: 4,
    image: "/podcast/syntax.jpg",
  },
  {
    id: 5,
    image: "/podcast/lenny.webp",
  },
  {
    id: 6,
    image: "/podcast/social-radar.webp",
  },
  {
    id: 7,
    image: "/podcast/sub-club.webp",
  },
];

const PodcastsSection = () => {
  return (
    <Section>
      <Container>
        <Box>
          <Carousel
            modules={[EffectCards, Pagination, Navigation, Autoplay]}
            items={podcastItems}
          />
        </Box>
        <Box>
          <Title>Podcasts</Title>
          <SubText>
            Here are some podcasts I listen to with interesting takes on several
            topics.
          </SubText>
          <SubTextLight>
            “I remind myself every morning: Nothing I say this day will teach me
            anything. So if I’m going to learn, I must do it by listening.” ―
            Larry King
          </SubTextLight>
        </Box>
      </Container>
    </Section>
  );
};

export default PodcastsSection;
