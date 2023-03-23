import { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Elements} from '@stripe/react-stripe-js';
import { stripePromise } from '../../utils/stripe/stripe.utils.js';
import PaymentForm from '../../components/payment-form/payment-form.components.jsx';
import { selectCartTotal } from '../../store/cart/cart.selector.js';
import { setIsCartOpen } from '../../store/cart/cart.action.js';
import {PaymentContainer} from './full-payment-form.styles.jsx';


const FullPaymentForm = () => {
    
    const dispatch=useDispatch();
    dispatch(setIsCartOpen(false));
    const amountPaid = useSelector(selectCartTotal);
    const [stripeOptions, setStripeOptions] = useState("");

    

    const amount=(amountPaid*100).toFixed(0);
    //amountPaid*100 was retaining a tiny decimal, which cause an error with Stripe which needs an integer value. .toFixed(0) cuts off decimals.
    

    useEffect(()=>{
        try {
            
        const callResponse = async () => await fetch('/.netlify/functions/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({amount: amount})  /* total amount paid is in cents */
            
        }).then(async (res) => {
            
            const response= await res.json();
            
            return response;
        });
        const callClientSecret = (res) => res.then(res=> res.paymentIntent.client_secret);
        const response = callResponse()
        
        const secret = callClientSecret(response)
        secret.then((res)=> setStripeOptions(res))
    }

    catch (err) {
        console.log("error", err)
    }
    },[])


    const client_secret = {clientSecret: stripeOptions}
    return (
        <Fragment>
            <PaymentContainer>
                {stripePromise && stripeOptions && 
                (<Elements key={stripeOptions} stripe={stripePromise} options = {client_secret}>
                    <PaymentForm />
                </Elements>
                )}
            </PaymentContainer>
        </Fragment>
    )
}

export default FullPaymentForm;