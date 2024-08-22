import React, { useContext } from 'react';
import HeaderInner from '../Header/HeaderInner.component';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules'; // Updated import statements
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CategoriesContext } from '../../context/CategoriesContext';
import ProductCart from '../ProductSection/ProductCart.component';
import './LimitedEditionSection.styles.scss';

const LimitedEditionSection = () => {
    const { limitedEdition, addToCart } = useContext(CategoriesContext);

    return (
        <div className='LimitedEdition'>
            <div className="container">
                <HeaderInner 
                    heading='Limited'
                    headingInner='Edition'
                />
                <Swiper
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 16,
                        },
                        767: {
                            slidesPerView: 3,
                        },
                        991: {
                            slidesPerView: 4,
                        },
                    }}
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={24}
                    slidesPerView={4}
                    navigation={{ clickable: true }}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                >
                    {limitedEdition.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ProductCart
                                product={product}
                                onAddToCart={() => addToCart(product)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default LimitedEditionSection;
