import React, { useContext } from 'react';
import './ProductSection.styles.scss';
import { Link } from 'react-router-dom';
import { CategoriesContext } from '../../context/CategoriesContext';
import ProductCart from './ProductCart.component';
import HeaderInner from '../Header/Header.component';

const ProductSection = () => {
    const { productCart } = useContext(CategoriesContext);

    return (
        <div className='ProductSection'>
            <div className="container">
                <HeaderInner 
                    heading='Our Trendy'
                    headingInner='Products'
                />
                <div className="Product_cart_main">
                    {productCart.map((product) => {
                        return (
                            <ProductCart
                                key={product.id}
                                product={product}
                            />
                        );
                    })}
                </div>
                <div className="action_otr">
                    <Link className='primary_underline_btn' to='/shop'>Discover More</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductSection;
