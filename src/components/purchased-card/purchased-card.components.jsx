
import { Fragment } from 'react';

import {PurchasedCardContainer, PurchasedFooter, PurchasedName, PurchasedPrice, PurchasedQuantity} from './purchased-card.styles.jsx';


const PurchasedCard = ({product}) => {
    const {id, name, price, quantity,imageUrl } = product;


    return (
        <Fragment>
        
            <PurchasedCardContainer>
            
                <img src={imageUrl} alt ={`${name}`} />
                
                <PurchasedFooter>
                    <PurchasedName>{name}</PurchasedName>
                    <PurchasedQuantity>Quantity :  {quantity}</PurchasedQuantity>
                    <PurchasedPrice>Price: ${price}</PurchasedPrice>
                    
                </PurchasedFooter>
                
                
            </PurchasedCardContainer>
        
        </Fragment> 
    );
};

export default PurchasedCard;
