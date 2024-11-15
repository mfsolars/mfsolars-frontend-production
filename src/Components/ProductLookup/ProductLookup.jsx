import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

import img1 from '../../assets/panel1.jpg';
import img2 from '../../assets/panel2.jpg';
import img3 from '../../assets/panel3.jpg';



function ProductLookup() {


    return (
        <section className="w-[100%] h-fit m-auto">
            <Swiper
                slidesPerView={1}
                style={{borderBottomLeftRadius:"10rem", borderTopRightRadius:"10rem" }}
                className='w-full h-60 md:h-80'
                modules={[Autoplay]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                centeredSlides={true}
                loop={true}
                grabCursor={true}
                pagination={{ clickable: true }}
            >
                        <SwiperSlide style={{ minWidth: "15rem", width: "100%"}}><img
                            src={img1}
                            alt=""
                            className="w-full m-auto solarpics"
                        />
                        </SwiperSlide>
                        <SwiperSlide style={{ minWidth: "15rem", width: "100%"}}><img
                            src={img2}
                            alt=""
                            className="w-full m-auto solarpics"
                        />
                        </SwiperSlide>
                        <SwiperSlide style={{ minWidth: "15rem", width: "100%"}}><img
                            src={img3}
                            alt=""
                            className="w-full m-auto solarpics"
                        />
                        </SwiperSlide>
               
            </Swiper>
        </section>
    );
}

export default ProductLookup;