import { Box, Container, StyledImage } from "./carousel-elements";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Howl } from "howler";
import {
  Autoplay,
  EffectCards,
  Keyboard,
  Navigation,
  Pagination,
} from "swiper";

export interface CarouselItem {
  id: number;
  image: string;
}

const Carousel = ({ items }: { items: CarouselItem[] }) => {
  const sound = new Howl({
    src: ["/turn.mp3"],
    rate: 1.5,
  });

  let isManualTurn = false;

  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        scrollbar={{
          draggable: true,
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        loop={true}
        onTransitionStart={() => {
          if (isManualTurn) {
            sound.play();
            isManualTurn = false;
          }
        }}
        onTouchStart={() => {
          isManualTurn = true;
        }}
        onSlideChangeTransitionStart={(swiper) => {
          if (swiper.autoplay.running) {
            isManualTurn = false;
          }
        }}
        onClick={() => {
          isManualTurn = true;
        }}
        onKeyPress={() => {
          isManualTurn = true;
        }}
        navigation={false}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay, Keyboard]}
        className="mySwiper"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <Box>
              <StyledImage
                height={180}
                width={180}
                src={item.image}
                alt="Carousel card image"
                priority
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Carousel;
