import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThankYouForm from '../../components/thank-you/thank-you.components.jsx'
import {fetchOrdersStart} from '../../store/orders/orders.action.js';
import { selectIsOrdersLoading  } from '../../store/orders/orders.selector.js';


const ThankYou = () => {    
   

    const isLoading = useSelector(selectIsOrdersLoading);
    const dispatch = useDispatch();
    useEffect(()=>{  
        dispatch(fetchOrdersStart());
    }, []); 


    return (
        <ThankYouForm  />
    );
    

}
    

export default ThankYou;