import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector.js';
import { addItemToCart } from '../../store/cart/cart.action.js';
import OurButton  from '../button/button.components.jsx';
import {ProductContainer, ButtonContainer, CardContainer, InfoContainer} from './individual-product-layout.styles.jsx';

// import {CategoryPreviewContainer, CatPreview, CatTitle} from './category-preview.styles.jsx';

const SingleProduct = ({id, product} ) => {
        
    const { name, price, quantity, description,imageUrl}= product;
   
    const cost = price.toFixed(2);
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
    
    return (
        <Fragment>
            <CardContainer>
                <ButtonContainer>
                    <OurButton  onClick={addProductToCart}>Add to Cart</OurButton>
                </ButtonContainer>
                <ProductContainer>
                    
                    <img src={imageUrl} alt ={`${name}`} />
                    <h2>{name}</h2>
                    <InfoContainer>
                        
                        <b>Price: ${cost}     |      Quantity: {quantity} </b>
                        <br />
                        <b>***  Description: {description}  ***</b>
                    </InfoContainer>
                </ProductContainer>
            </CardContainer>
            
        </Fragment>
    );
}


export default SingleProduct;