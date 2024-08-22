import { useContext } from 'react';

import { CartContext } from '../../context/CartContext';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem.component';

import './Checkout.scss';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <div className="checkout_main">
            <div className="container">
                <div className="checkout_header">
                    <div className="header_block">
                        <span className='heading heading-xsm'>Product Detail</span>
                    </div>
                    <div className="header_block">
                        <span className='heading heading-xsm'>Price</span>
                    </div>
                    <div className="header_block">
                        <span className='heading heading-xsm'>Quantity</span>
                    </div>
                    <div className="header_block">
                        <span className='heading heading-xsm'>Subtotal</span>
                    </div>
                    <div className="header_block">
                        <span className='heading heading-xsm'>Close</span>
                    </div>
                </div>
                {cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))}
                <span className='total heading-sm'>Total: ${cartTotal}</span>
            </div>
        </div>
    );
}

export default Checkout;
