import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper mt-5"
            >
                <SwiperSlide>
                    <div className="img">
                        <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/clients/client-1.png" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="img">
                        <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/clients/client-2.png" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="img">
                        <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/clients/client-3.png" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="img">
                        <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/clients/client-5.png" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="img">
                        <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/clients/client-6.png" alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="img">
                        <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/clients/client-7.png" alt="" />
                    </div>
                </SwiperSlide>

                
            </Swiper>
        </>
    );
}
