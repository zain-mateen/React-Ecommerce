import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

import './CompanyPartnerSection.styles.scss';

import brandLogo1 from '../../img/brand1.webp';
import brandLogo2 from '../../img/brand2.webp';
import brandLogo3 from '../../img/brand3.webp';
import brandLogo4 from '../../img/brand4.webp';
import brandLogo5 from '../../img/brand5.webp';
import brandLogo6 from '../../img/brand6.webp';
import brandLogo7 from '../../img/brand7.webp';

const CompanyPartnerSection= () => {
    return (
        <div className='CompanyPartnerSection'>
            <div className="container">
                <h6 className="company_heading heading-mm">Company Partner</h6>
                <Swiper
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 16,
                        },
                        575: {
                            slidesPerView: 3,
                        },
                        991: {
                            slidesPerView: 4,
                        },
                        1200: {
                            slidesPerView: 5,
                        },
                    }}
                    modules={[Autoplay]}
                    spaceBetween={24}
                    slidesPerView={5}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                >
                    <SwiperSlide>
                        <div className="logo_otr">
                            <img className='logo_img' src={brandLogo1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="logo_otr">
                            <img className='logo_img' src={brandLogo2} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="logo_otr">
                            <img className='logo_img' src={brandLogo3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="logo_otr">
                            <img className='logo_img' src={brandLogo4} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="logo_otr">
                            <img className='logo_img' src={brandLogo5} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="logo_otr">
                            <img className='logo_img' src={brandLogo6} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="logo_otr">
                            <img className='logo_img' src={brandLogo7} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default CompanyPartnerSection;
