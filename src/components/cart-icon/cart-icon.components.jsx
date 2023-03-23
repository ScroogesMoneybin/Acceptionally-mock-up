import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector.js';
import {setIsCartOpen} from '../../store/cart/cart.action.js';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles.jsx';

const CartIcon = () => {
    const dispatch =useDispatch();
    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);
    
    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));  /*setIsCartOpen is an action that needs to be dispatched*/
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />     
            <ItemCount>{cartCount}</ItemCount>  

        </CartIconContainer>
    )
};

export default CartIcon;