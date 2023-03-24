import {  useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector.js';
import { selectCurrentUser } from '../../store/user/user.selector.js';
import CheckoutItem from '../../components/checkout-items/checkout-items.components.jsx';
import {CheckoutContainer, CheckoutHeader, CheckoutHeaderBlock, CheckoutDescriptionHeaderBlock, CheckoutTotal} from './checkout.styles.jsx';


import OurButton from '../../components/button/button.components.jsx';


const Checkout = () => {
    
    const currentUser = useSelector(selectCurrentUser);
    const navigate = useNavigate();
    const goToPaymentHandler = () => {
        if (!currentUser) {
            
            alert("Please sign in to check out")
            return;
        }
        navigate('/payment');
    }
        
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const cartValue = cartTotal.toFixed(2);
    
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <CheckoutHeaderBlock>
                    <span>Product</span>
                </CheckoutHeaderBlock> 
                <CheckoutDescriptionHeaderBlock>
                    <span>Description</span>
                </CheckoutDescriptionHeaderBlock> 
                <CheckoutHeaderBlock>
                    <span>Quantity</span>
                </CheckoutHeaderBlock> 
                <CheckoutHeaderBlock>
                    <span>Price</span>
                </CheckoutHeaderBlock> 
                <CheckoutHeaderBlock>
                    <span>Remove</span>
                </CheckoutHeaderBlock> 
            </CheckoutHeader>
            
            
                {cartItems.map((cartItem)=>{
                    return (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                    );
                })}
                
                <CheckoutTotal>Total: ${cartValue} </CheckoutTotal>
               
               <OurButton onClick={goToPaymentHandler}>Go To Payment</OurButton>
                
            
        </CheckoutContainer>
    )
};

export default Checkout;