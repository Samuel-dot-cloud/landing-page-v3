import { Box, Container, StyledImage } from "./carousel-elements";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { SwiperModule } from "swiper/types";
import { Howl } from "howler";

export interface CarouselItem {
  id: number;
  image: string;
}

const Carousel = ({
  modules,
  items,
}: {
  modules: SwiperModule[];
  items: CarouselItem[];
}) => {
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
        navigation={false}
        effect={"cards"}
        grabCursor={true}
        modules={modules}
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
