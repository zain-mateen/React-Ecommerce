import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CheckoutItem.scss';

const CheckoutItem = ({ cartItem }) => {
    const { image, heading, price, quantity } = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext);

    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);
    const clearItemHandler = () => clearItemFromCart(cartItem);
    
    return (
        <div className='checkout_item_container'>
            <div className="img_otr">
                <img className='img' src={image} alt={`${heading}`} />
            </div>
            <span className="heading heading-xsm">{heading}</span>
            <span className="quantity">
                <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
                <span className="value heading-xsm">{quantity}</span>
                <div className="arrow" onClick={addItemHandler}>&#10095;</div>
            </span>
            <span className="price heading-xsm">{price}</span>
            <div className="remove_button" onClick={clearItemHandler}>&#10005;</div>
        </div>
    );
}

export default CheckoutItem;
