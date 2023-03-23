import { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {CardElement, PaymentElement, useStripe, useElements, Elements, AddressElement} from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import { createOrderDocument } from '../../utils/firebase/firebase.utils.js';
import { selectCartTotal, selectCartItems } from '../../store/cart/cart.selector.js';
import { selectCurrentUser } from '../../store/user/user.selector.js';
import {OUR_BUTTON_TYPE_CLASSES} from '../button/button.components.jsx';
import { emptyItemsFromCart } from '../../store/cart/cart.action.js';
import {PaymentFormContainer, FormContainer, PaymentButton} from './payment-form.styles.jsx';
import {setOrderId} from '../../store/orders/orders.action.js';
import { stripePromise, callResponse, callClientSecret } from '../../utils/stripe/stripe.utils.js';


const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amountPaid = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const [stripeOptions, setStripeOptions] = useState("");
    const [emailAddress, setEmailAddress] = useState(null);
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    


    const paymentHandler = async (e) => {
        e.preventDefault(); //prevents normal default actions of form submission
        
        
        if (!stripe || !elements) {
            return;
        }
        setIsProcessingPayment(true);
    //
        const addressElement = elements.getElement('address');

        const {complete, value} = await addressElement.getValue();
        const shippingAddress = value;
        if (complete) {
            // Allow user to proceed to the next step
            // Optionally, use value to store the address details
        
    //
            // const response = await fetch('/.netlify/functions/create-payment-intent', {
            //     method: 'post',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({amount: amountPaid*100})  /* total amount paid is in cents */
            // }).then(res => {
            //     return res.json();
            // });
            
            // const clientSecret = await response.paymentIntent.client_secret;
            
            // let response = callResponse(amountPaid)
            // response.then((res)=>setStripeOptions(res))
            
            // setStripeOptions(clientSecret);

            // console.log("secret",typeof clientSecret);
            // console.log("options",stripeOptions);

            const paymentResult = await stripe.confirmPayment({
                elements,
                confirmParams: {
                return_url: `${window.location.origin}/thankyou`,
                },
                // Uncomment below if you only want redirect for redirect-based payments
                redirect: 'if_required',
            });
            
            // const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            //     payment_method: {
            //         card: elements.getElement(CardElement),
            //         billing_details: {
            //             name: currentUser ? currentUser.displayName : 'Guest'
            //         }
            //     }
            // });
            
            
            setIsProcessingPayment(false);

            if (paymentResult.error ) {
                alert ("Error processing payment. Please check credit card information, and try again.", paymentResult.error)
            }
            else {
                if (paymentResult.paymentIntent.status === 'succeeded') {
                    const finalOrder = {items: cartItems, address: shippingAddress}
                    const orderId = await createOrderDocument(finalOrder, amountPaid);
                    dispatch(setOrderId(orderId))
                    
                    const goToThankYouHandler = () => navigate('/thankyou');
                    goToThankYouHandler();
                    dispatch(emptyItemsFromCart(cartItems));
                }
            }
        }
        else {
            alert ("Error processing payment. Please complete address.")
            setIsProcessingPayment(false);
            return;
        }

    
    }
//stripe test Visa number is 4242 4242 4242 4242
    return (

        
        <PaymentFormContainer>
            <h2>Shipping Address:</h2>
                    
                <FormContainer onSubmit={paymentHandler}> {/* This FormContainer makes the Button in it a submission button automatically */}
                <h3>Shipping</h3>
                <AddressElement options={{mode: 'shipping'}} />
                {/* <EmailInput  type="email" name='reply_to' placeholder="Your Email Address" value={toSend.reply_to} onChange={handleChange} /> */}
                    <h2>Credit Card Payment</h2>
                
                    <PaymentElement />
                
                    <PaymentButton isLoading = {isProcessingPayment} ourButtonType={OUR_BUTTON_TYPE_CLASSES.inverted}>Click To Pay</PaymentButton>
                </FormContainer>
        </PaymentFormContainer>
         
    )
}
export default PaymentForm;