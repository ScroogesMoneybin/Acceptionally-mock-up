import { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {send} from 'emailjs-com';
import PurchasedCard from '../purchased-card/purchased-card.components.jsx';

import {selectOrders, selectIsOrdersLoading, selectOrderId } from '../../store/orders/orders.selector.js';
import {setOrders, setOrderId, emailOrdersStart} from '../../store/orders/orders.action.js';
import Spinner from '../../components/spinner/spinner.components.jsx';
import {ThankYouContainer} from './thank-you.styles.jsx';

const ThankYouForm = () => {
    const dispatch = useDispatch();
    
    const [purchase, setPurchase] = useState([]);
    const [products, setProducts] = useState([]);
    const [orderTotal, setOrderTotal] = useState();
    const [created, setCreated] = useState('');
    const isLoading = useSelector(selectIsOrdersLoading);

    const shipment = useSelector(selectOrders);

    useEffect(()=>{
        try{
        setProducts(shipment.order.items);
        setCreated(shipment.createdAt);
        setOrderTotal(shipment.totalCost);
        }
        catch (err) {
        console.log("error", err)
    }        
    },[shipment])
    
    const orderTime = created.substring(0,24);


    return (
        <Fragment>
            <h1>Thank you for your order placed on {orderTime}.</h1>
            <h2>An email confirming your purchase has been sent to the email address registered with your account.</h2>
            {isLoading ? (<Spinner />) : ( 
            <ThankYouContainer>
                
                {products && products.map((product) => (<PurchasedCard key={product.id} product={product} /> ))}
                
            </ThankYouContainer>
            )}
        </Fragment>
    );


    
}

export default ThankYouForm;