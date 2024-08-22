import { useContext } from 'react';

import { WishlistContext } from '../../context/WishlistContext';

import './WishlistItem.styles.scss';

const WishlistItem = ({ wishlistItem }) => {
    const { heading, image, price } = wishlistItem;

    const { clearItemFromWishlist } = useContext(WishlistContext);

    const clearWishlistItem = () => clearItemFromWishlist(wishlistItem);

    return (
        <div className='WishlistItem_container'>
            <div className="img_otr">
                <img className='img' src={image} alt={`${heading}`} />
                <div className="close_icon_otr" onClick={clearWishlistItem}>
                    <i className="icon ri-close-line"></i>
                </div>
            </div>
            <div className="item_details">
                <p className='title heading-xsm'>Dress</p>
                <p className='heading heading-sm'>{heading}</p>
                <p className='price heading-xsm'>${price}</p>
            </div>
        </div>
    );
}

export default WishlistItem;
