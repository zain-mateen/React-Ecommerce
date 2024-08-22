import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CheckoutItem.styles.scss';

const CheckoutItem = ({ cartItem }) => {
    const { image, heading, price, quantity } = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext);

    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);
    const clearItemHandler = () => clearItemFromCart(cartItem);

    const itemSubtotal = price * quantity;

    return (
        <div className='checkout_item_container'>
            <div className="img_details">
                <div className="img_otr">
                    <img className='img' src={image} alt={`${heading}`} />
                </div>
                <div className="details">
                    <p className="heading heading-xsm">{heading}</p>
                    <p className="color heading-xs">Color: <span className='color_inr heading-xsm'>Yellow</span></p>
                    <p className="size heading-xs">Size: <span className='size_inr heading-xsm'>L</span></p>
                    <div className="res_quantity_otr">
                        <div className="icon_otr" onClick={removeItemHandler}>
                            <i class="icon ri-subtract-line"></i>
                        </div>
                        <span className="value heading-xsm">{quantity}</span>
                        <div className="icon_otr" onClick={addItemHandler}>
                            <i class="icon ri-add-line"></i>
                        </div>
                    </div>
                </div>
            </div>
            <span className="price heading-xsm">{price}</span>
            <span className="quantity_main">
                <div className="quantity_otr">
                    <div className="icon_otr" onClick={removeItemHandler}>
                        <i class="icon ri-subtract-line"></i>
                    </div>
                    <span className="value heading-xsm">{quantity}</span>
                    <div className="icon_otr" onClick={addItemHandler}>
                        <i class="icon ri-add-line"></i>
                    </div>
                </div>
            </span>
            <span className='sub_total heading-xsm'>${itemSubtotal}</span>
            <div className="remove_icon" onClick={clearItemHandler}>
                <i class="icon ri-close-line"></i>
            </div>
        </div>
    );
}

export default CheckoutItem;
