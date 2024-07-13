import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import './ProductSection.scss';

const ProductCart = ({
    image,
    hoverImage,
    heading,
    price,
    starIcons = [], // Default value for starIcons
    text,
    to,
    hasHoverImage = true, // Default value for hasHoverImage
    cartClass
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`col_box_otr ${cartClass}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="col_box_inr">
                <Link to={to} className="img_otr">
                    <img
                        className='img'
                        src={isHovered && hasHoverImage ? hoverImage : image}
                        alt="Product img"
                    />
                    <div className="img_cart_btn_otr">
                        <ThemeBtn
                            ButtonClass='primary_btn addToCart_btn'
                            ButtonText='Add to Cart'
                        />
                    </div>
                </Link>
                <div className="content">
                    <p className="title heading-xs">Dresses</p>
                    <Link className='heading heading-sm' to={to}>{heading}</Link>
                    <p className="price heading-sm">{price}</p>
                    <div className="star_text_otr">
                        <ul className="star_ul">
                            {starIcons.map((icon) => (
                                <li className="star_li" key={icon.id}>{icon.icon}</li>
                            ))}
                        </ul>
                        {text && <span className="text heading-xs">{text}</span>}
                    </div>
                    <div className="icon_otr">
                        <i className="icon ri-heart-line"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCart;
