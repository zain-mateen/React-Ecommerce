import { useContext } from 'react';

import { WishlistContext } from '../../context/WishlistContext';

import WishlistItem from '../../components/WishlistItem/WishlistItem.component';

import './WishList.scss';

const WishList = () => {
    const { wishlistItems } = useContext(WishlistContext) || { wishlistItems: [] };

    return (
        <div className='wishlist_main'>
            <div className="container">
                <div className="wishlist_inr">
                    {wishlistItems.length > 0 ? (
                        wishlistItems.map((wishlistItem) => (
                            <WishlistItem key={wishlistItem.id} wishlistItem={wishlistItem} />
                        ))
                    ) : (
                        <p className='empty_text heading-sm'>No items in your wishlist</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default WishList;
