import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Logo1 from "../../images/logo-1.png";
import Logo2 from "../../images/logo-2.png";
import Logo3 from "../../images/logo-3.png";
import Logo4 from "../../images/logo-4.png";
import Logo5 from "../../images/logo-5.png";
import Logo6 from "../../images/logo-6.png";
import Logo7 from "../../images/logo-7.png";
import Logo8 from "../../images/logo-8.png";
import Logo9 from "../../images/logo-9.png";
import Logo10 from "../../images/logo-10.png";
import Logo11 from "../../images/logo-11.png";
import "swiper/css";
import "./Carousel.css";

import { Autoplay } from "swiper";

const Carousel = () => {
    return (
        <>
            <Swiper
                spaceBetween={20}
                loop={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    300: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="single-carousel">
                        <img src={Logo1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-carousel">
                        <img src={Logo2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-carousel">
                        <img src={Logo3} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-carousel">
                        <img src={Logo4} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-carousel">
                        <img src={Logo5} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-carousel">
                        <img src={Logo6} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-carousel">
                        <img src={Logo7} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-carousel">
                        <img src={Logo8} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-carousel">
                        <img src={Logo9} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-carousel">
                        <img src={Logo10} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-carousel">
                        <img src={Logo11} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Carousel;
