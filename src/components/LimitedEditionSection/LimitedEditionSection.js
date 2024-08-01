import React, { useContext } from 'react';
import HeaderInner from '../Header/HeaderInner';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules'; // Updated import statements
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ProductsContext } from '../../context/ProductContext';
import ProductCart from '../ProductSection/ProductCart';
import './LimitedEditionSection.scss';

const LimitedEditionSection = () => {
    const { limitedEdition, addToCart } = useContext(ProductsContext);

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
                >
                    {limitedEdition.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ProductCart
                                image={product.image}
                                heading={product.heading}
                                price={product.price}
                                starIcons={product.starIcons}
                                text={product.text}
                                to='/'
                                hasHoverImage={false}
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
