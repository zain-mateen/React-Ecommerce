import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import CartItem from '../CartItem/CartItem';
import './CartSlideShow.scss';

const CartSlideShow = () => {
  const { isCartOpen, setIsCartOpen, cartTotal } = useContext(CartContext);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  }

  const closeSlideShow = () => setIsCartOpen(false);

  return (
    <div className={`cart_slideshow_container ${isCartOpen ? 'open' : ''}`}>
      <div className="cart_slideshow_header">
        <h5 className="heading heading-sm">Shopping Bag({cartItems.length})</h5>
        <div className="icon_otr" onClick={closeSlideShow}>
          <i className="icon ri-close-line"></i>
        </div>
      </div>
      <div className="cart_slideshow_body">
        <div className="cart_items">
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </div>
      </div>
      <div className="cart_slideshow_footer">
        <div className="total_main">
          <p className="text heading-xsm">SUBTOTAL:</p>
          <p className="text heading-xsm">${cartTotal}</p>
        </div>
        <div className="action_otr" onClick={goToCheckoutHandler}>
          <ThemeBtn 
            ButtonClass='primary_btn'
            ButtonText='Checkout'
          />
        </div>
      </div>
    </div>
  );
}

export default CartSlideShow;
