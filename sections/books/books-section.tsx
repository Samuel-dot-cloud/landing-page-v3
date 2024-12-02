import Carousel, { CarouselItem } from "../../components/carousel";
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper";
import {
  Box,
  Container,
  Section,
  SubText,
  SubTextLight,
  Title,
} from "./books-section-elements";

const bookItems: CarouselItem[] = [
  {
    id: 1,
    image: "/books/ios-15.jpeg",
  },
  {
    id: 2,
    image: "/books/flutter-engineering.png",
  },
  {
    id: 3,
    image: "/books/ego.jpeg",
  },
  {
    id: 4,
    image: "/books/almanack.png",
  },
  {
    id: 5,
    image: "/books/modern-concurrency.jpg",
  },
  {
    id: 6,
    image: "/books/programming-rust.jpg",
  },
  {
    id: 7,
    image: "/books/combine.jpg",
  },
];

const BooksSection = () => {
  return (
    <Section>
      <Container>
        <Box>
          <Carousel
            modules={[EffectCards, Pagination, Navigation, Autoplay]}
            items={bookItems}
          />
        </Box>
        <Box>
          <Title>Books</Title>
          <SubText>
            Here are some cool books covering various topics that I&apos;ve
            found and read.
          </SubText>
          <SubTextLight>“Knowledge is power” – Francis Bacon</SubTextLight>
        </Box>
      </Container>
    </Section>
  );
};

export default BooksSection;
