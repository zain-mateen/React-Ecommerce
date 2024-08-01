import React, { useContext } from 'react';
import './ProductSection.scss';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../context/ProductContext';
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import ProductCart from './ProductCart';
import HeaderInner from '../Header/HeaderInner';

const ProductSection = () => {
    const { productCart } = useContext(ProductsContext);

    return (
        <div className='ProductSection'>
            <div className="container">
                <HeaderInner 
                    heading='Our Trendy'
                    headingInner='Products'
                />
                <div className="Product_cart_main">
                    {productCart && productCart.map((product) => {
                        if (!product) {
                            console.warn("Undefined product encountered:", product);
                            return null;
                        }
                        return (
                            <ProductCart
                                key={product.id}
                                product={product}
                            />
                        );
                    })}
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
};

export default ProductSection;
