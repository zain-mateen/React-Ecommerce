import { useContext } from 'react';

import { WishlistContext } from '../../context/WishlistContext';

import './WishlistIcon.styles.scss';
import { Link } from 'react-router-dom';

const WishlistIcon = () => {
    const { wishlistCount } = useContext(WishlistContext);

    return (
        <Link className='wishlist_icon_container'>
             <i className="wishlist_icon ri-heart-line"></i>
            <span className='item_count'>{wishlistCount}</span>
        </Link>
    );
}

export default WishlistIcon;
