import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { selectCartItems } from '../../store/cart/cart.selector.js';
// import { addItemToCart } from '../../store/cart/cart.action.js';
// import OurButton, {OUR_BUTTON_TYPE_CLASSES} from '../../components/button/button.components.jsx';
// import {ProductCardContainer, ProductFooter, ProductName, ProductPrice} from './individual-product-page.styles.jsx';


import { useParams } from 'react-router-dom';
import {fetchCategoriesStart} from '../../store/categories/category.action.js';
import {selectorCategoriesMap, selectIsCategoriesLoading} from '../../store/categories/category.selector.js';

import Spinner from '../../components/spinner/spinner.components.jsx';
import SingleProduct from '../../components/individual-product-layout/individual-product-layout.components.jsx';

const SingleProductPage = () => {
    const {id} = useParams();
    
    const dispatch = useDispatch();
        
    useEffect(()=>{  
        dispatch(fetchCategoriesStart());
    }, []); 
    const categoriesMap = useSelector(selectorCategoriesMap);
    const isLoading = useSelector(selectIsCategoriesLoading);

    
    const merch = Object.values(categoriesMap) 
    const merchandise = merch.flat();
    
    
    const product = merchandise.find(item => `${item.id}`===`${id}`);  /* Given an array of objects, this will find the object in the array with an id of {id} */
        
    return (
        <Fragment>
                { isLoading ? (<Spinner />) : 
                    (
                        product && <SingleProduct key = {id} id = {id} product = {product} />
                    )
                }
     
        </Fragment>   
    );
};

export default SingleProductPage;
