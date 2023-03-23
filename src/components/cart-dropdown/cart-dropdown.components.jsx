import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector.js';
import OurButton from '../button/button.components.jsx';
import CartItem from '../cart-item/cart-item.components.jsx'; 
import {CartDropDownContainer, EmptyMessage, CartItemsContainer} from './cart-dropdown.styles.jsx';

const CartDropDown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();
    const goToCheckoutHandler = () => navigate('/checkout');

    return (
        <CartDropDownContainer>
            <CartItemsContainer>
                {cartItems.length ? (cartItems.map((item) => 
                    <CartItem key={item.id} cartItem={item} />
                ))
                : (<EmptyMessage>Your cart is empty.</EmptyMessage>)
                }
            </CartItemsContainer>
            <OurButton onClick={goToCheckoutHandler}>Checkout</OurButton>
            
        </CartDropDownContainer>
    );
};

export default CartDropDown;