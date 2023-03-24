import styled from 'styled-components';

export const CheckoutContainer = styled.div`
    width: 75%; 
    min-height: 90vh; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    margin: 50px auto 0; 
    margin-bottom: 5px;

    @media screen and (max-width: 900px) {
        width: 90%;
        margin: 50px auto 0; 
    }

    @media screen and (max-width: 600px) {
        width: 100%;
        margin: 50px auto 0; 
    }
`  

export const CheckoutHeader = styled.div` 
    width: 100%; 
    padding: 10px 0; 
    display: flex; 
    justify-content: space-between; 
    border-bottom: 1px solid darkgrey; 

    @media screen and (max-width: 600px) {
        padding: 2px 0;
        
        
    }
`
export const CheckoutHeaderBlock = styled.div` 
    text-transform: capitalize; 
    width: 23%; 
    
    &:last-child { 
        width: 8%; 
    } 

    

    @media screen and (max-width: 460px) {
        transform: scale(0.82);
        
    }
        
`
  
export const CheckoutDescriptionHeaderBlock = styled.div` 
    text-transform: capitalize; 
    width: 23%; 
    
    &:last-child { 
        width: 8%; 
    } 

    

    @media screen and (max-width: 460px) {
        transform: scale(0.82);
        
    }

    @media screen and (max-width: 375px) {
        display: none;
        
    }
        
`


export const CheckoutTotal =styled.span` 
    margin-top: 30px; 
    margin-left: auto; 
    margin-bottom: 15px;
    font-size: 36px; 

    @media screen and (max-width: 900px) {
        font-size: 30px;
        margin-bottom: 20px;
    }
    
    @media screen and (max-width: 600px) {
        font-size: 26px;
                
    }
` 
 