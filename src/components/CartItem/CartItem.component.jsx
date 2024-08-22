import './CartItem.styles.scss';

const CartItem = ({ cartItem }) => {
    const { heading, image, price, quantity } = cartItem;

    return (
        <div className='cart_item_container'>
            <img className='img' src={image} alt={`${heading}`} />
            <div className="item_details">
                <span className='heading heading-xsm'>{heading}</span>
                <span className='price heading-xsm'>{quantity} X {price}</span>
            </div>
        </div>
    );
}

export default CartItem;
