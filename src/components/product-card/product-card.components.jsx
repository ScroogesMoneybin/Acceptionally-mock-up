import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector.js';
import { addItemToCart } from '../../store/cart/cart.action.js';
import OurButton, {OUR_BUTTON_TYPE_CLASSES} from '../button/button.components.jsx';
import {ProductCardContainer, ProductFooter, ProductName, ProductPrice, ProductQuantity} from './product-card.styles.jsx';


const ProductCard = ({product}) => {
    const {id, name, price, quantity, imageUrl } = product;
    const cost = price.toFixed(2);
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

   
    const navigate = useNavigate();
    const goToProductHandler = () => navigate(`/${id}`);



    return (
        <Fragment>
        
        <ProductCardContainer>
        
            <img src={imageUrl} alt ={`${name}`} />
            
            <ProductFooter>
                <ProductName>{name}</ProductName>
                
                <ProductPrice>${cost}</ProductPrice>
                <ProductQuantity>Quantity Available :  {quantity}</ProductQuantity>
              
            </ProductFooter>
                <OurButton ourButtonType={OUR_BUTTON_TYPE_CLASSES.inverted} onClick={goToProductHandler}>Learn More</OurButton>
                <OurButton ourButtonType={OUR_BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to Cart</OurButton>
                
            
        </ProductCardContainer>
        
        </Fragment> 
    );
};

export default ProductCard;
