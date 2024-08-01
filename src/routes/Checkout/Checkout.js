import { useContext } from 'react';

import { CartContext } from '../../context/CartContext';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import './Checkout.scss'

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <div className="checkout_main">
            <div className="container">
                <div className="checkout_header">
                    <div className="header_block">
                        <span className='heading heading-xsm'>Product</span>
                    </div>
                    <div className="header_block">
                        <span className='heading heading-xsm'>Description</span>
                    </div>
                    <div className="header_block">
                        <span className='heading heading-xsm'>Quantity</span>
                    </div>
                    <div className="header_block">
                        <span className='heading heading-xsm'>Price</span>
                    </div>
                    <div className="header_block">
                        <span className='heading heading-xsm'>Subtotal</span>
                    </div>
                </div>
                {cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))}
                <span className='total'>Total: ${cartTotal}</span>
            </div>
        </div>
    );
}

export default Checkout;
