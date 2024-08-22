import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button/Button.component';
import { CartContext } from '../../context/CartContext';
import { WishlistContext } from '../../context/WishlistContext';

import './ProductSection.styles.scss';

const ProductCart = ({ product }) => {
    const { addItemToCart } = useContext(CartContext);
    const { addItemToWishlist } = useContext(WishlistContext);

    if (!product) {
        return null; // Render nothing if the product is undefined
    }

    const { image, heading, price, starIcons = [], text, to, } = product;

    const addProductToCart = () => addItemToCart(product);
    const addProductToWishlist = () => addItemToWishlist(product);

    return (

        <div className="col_box_otr">
            <div className="col_box_inr">
                <div className="img_otr">
                    <img className='img' src={image} alt={`${heading}`} />
                    <div className="img_cart_btn_otr" onClick={addProductToCart}>
                        <Button>Add to cart</Button>
                    </div>
                </div>
                <div className="content">
                    <p className="title heading-xs">Dresses</p>
                    <Link className='heading heading-sm' to={to}>{heading}</Link>
                    <p className="price heading-sm">${price}</p>
                    <div className="star_text_otr">
                        <ul className="star_ul">
                            {starIcons.map((icon, index) => (
                                <li className="star_li" key={index}>{icon.icon}</li>
                            ))}
                        </ul>
                        {text && <span className="text heading-xs">{text}</span>}
                    </div>
                    <div className="icon_otr" onClick={addProductToWishlist}>
                        <i className="icon ri-heart-line"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;
