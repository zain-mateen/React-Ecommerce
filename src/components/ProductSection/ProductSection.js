import React from 'react';
import './ProductSection.scss';
import { Link } from 'react-router-dom';

import ThemeBtn from '../ThemeBtn/ThemeBtn';
import { ProductCartData } from '../../Data';
import ProductCart from './ProductCart';
import HeaderInner from '../Header/HeaderInner';

const ProductSection = () => {
    return (
        <div className='ProductSection'>
            <div className="container">
                <HeaderInner 
                    heading='Our Trendy'
                    headingInner='Products'
                />
                <div className="Product_cart_main">
                    {ProductCartData.map((product) => (
                        <ProductCart
                            key={product.id}
                            image={product.image}
                            hoverImage={product.hoverImage}
                            heading={product.heading}
                            price={product.price}
                            starIcons={product.starIcons}
                            text={product.text}
                            to='/'
                            hasHoverImage={true} // Enable hover image effect
                        />
                    ))}
                </div>
                <Link className="action_otr" to='/'>
                    <ThemeBtn 
                        ButtonClass='primary_underline_btn'
                        ButtonText='Discover More'
                    />
                </Link>
            </div>
        </div>
    );
}

export default ProductSection;
