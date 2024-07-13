import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.scss';
import { HeroSliderContent, SocialIcons } from '../../Data';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ThemeBtn from '../ThemeBtn/ThemeBtn';

const HeroSection = () => {
    // Filter out YouTube icon (assuming id: 5 is for YouTube)
    const filteredSocialIcons = SocialIcons.filter(icon => icon.id !== 3);

    return (
        <div className="HeroSection">
            <div className="container_fluid">
                <Swiper
                    // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    >
                    {HeroSliderContent.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="swiper_slider_inr">
                                <div className="slider_bg_otr">
                                    <img className='slider_bg' src={item.backgroundPattern} alt="Slider background Pattern" />
                                </div>
                                <div className="slideshow_text">
                                    {item.title && <h6 className="title heading-xs">{item.title}</h6>}
                                    {item.heading && <h1 className="heading heading-h1-regular">{item.heading}</h1>}
                                    {item.heading2 && <h1 className="heading heading-h1-bold">{item.heading2}</h1>}
                                    {item.description && <p className="desc heading-sm">{item.description}</p>}
                                    <Link className="action_otr">
                                        <ThemeBtn 
                                            ButtonClass='primary_underline_btn discover_btn'
                                            ButtonText='Discover More'
                                        />
                                    </Link>
                                </div>
                                <div className="slideshow_character">
                                    <img className='img' src={item.image} alt="slideshow Character" />
                                    {item.markupText && (
                                        <div className="character_markup_text">
                                            <p className="text heading-markup">{item.markupText}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="social_otr">
                <ul className="social_ul">
                    {filteredSocialIcons.map((item) => (
                        <div className="social_li" key={item.id}>
                            <a href='/' className="social_a">
                                {item.icon}
                            </a>
                        </div>
                    ))}
                </ul>
                <p className="text heading-xsm">Follow Us</p>
            </div>
            <div className="scroll_text_otr">
                <a href='#CollectionSection' className="scroll_text heading-xsm">Scroll</a>
            </div>
        </div>
    );
}

export default HeroSection;
