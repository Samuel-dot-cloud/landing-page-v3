import {Box, Container, Subtitle, Title} from "./carousel-elements";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Pagination, Navigation, Autoplay, EffectCards} from "swiper";
import Image from "next/image";
import {SwiperModule} from "swiper/types";


export interface CarouselItem {
    id: number;
    image: string;
}

const Carousel = ({modules, items}: { modules: SwiperModule[], items: CarouselItem[] }) => {
    return (
        <Container>
            <Swiper
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    type: 'fraction'
                }}
                scrollbar={{
                    draggable: true
                }}
                navigation={false}
                effect={"cards"}
                grabCursor={true}
                modules={modules}
                className="mySwiper"
            >
                {items.map(item =>
                    <SwiperSlide key={item.id}>
                        <Box>
                            <Image height={180} width={180} src={item.image}
                                   alt=""/>
                        </Box>
                    </SwiperSlide>
                )}
            </Swiper>
        </Container>
    );
}

export default Carousel