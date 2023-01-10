import {Container} from "./carousel-elements";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Pagination, Navigation, Autoplay, EffectCards} from "swiper";
import Image from "next/image";


const Carousel = () => {
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
                modules={[EffectCards, Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><Image height={180} width={180} src="/android-studio.svg"
                                    alt="Android Studio"/></SwiperSlide>
                <SwiperSlide><Image height={180} width={180} src="/postman.svg" alt="Postman"/></SwiperSlide>
                <SwiperSlide><Image height={180} width={180} src="/vs.svg" alt="Visual Studio Code"/></SwiperSlide>
                <SwiperSlide><Image height={180} width={180} src="/webstorm.svg" alt="Webstorm"/></SwiperSlide>
                <SwiperSlide><Image height={180} width={180} src="/xcode.png" alt="Xcode"/></SwiperSlide>
            </Swiper>
        </Container>
    );
}

export default Carousel