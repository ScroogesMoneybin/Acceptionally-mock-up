import {CartItemContainer, CartItemDetails} from './cart-item.styles.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector.js';
import { clearItemFromCart } from '../../store/cart/cart.action.js';
import { RemoveButton } from './cart-item.styles.jsx';

const CartItem = ({cartItem}) => {
    const {name, price, imageUrl, quantity}= cartItem;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const shortenedName=name.slice(0,20);
    return (
        <CartItemContainer>
            <img src= {imageUrl} alt={`${name}`} />
            <CartItemDetails>
                <span>{shortenedName}</span>
                <span>{quantity} x ${price}</span>
                <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
            </CartItemDetails>
            
        </CartItemContainer>
    )

}


export default CartItem;