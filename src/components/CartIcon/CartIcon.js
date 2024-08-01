import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

import './CartIcon.scss';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className='cart_icon_container' onClick={toggleIsCartOpen}>
            <i className="shopping_icon ri-shopping-bag-line"></i>
            <span className='item_count'>{cartCount}</span>
        </div>
    );
}

export default CartIcon;
