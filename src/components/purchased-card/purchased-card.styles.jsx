import styled from 'styled-components';



export const PurchasedCardContainer =styled.div` 
    width: 100%; 
    display: flex; 
    flex-direction: column; 
    height: 350px; 
    align-items: center; 
    position: relative; 
    margin-bottom: 75px;
    img { 
        width: 100%; 
        height: 95%; 
        object-fit: cover; 
        margin-bottom: 5px; 
    } 
    
    @media screen and (max-width: 900px) {
        margin-bottom: 120px;
    }
    

    @media screen and (max-width: 450px) {
        width: 80vw;
    }
   
    
`;
    
export const PurchasedFooter = styled.div` 
    width: 100%; 
    height: 5%; 
    display: flex; 
    justify-content: space-between; 
    flex-direction: column; 
    align-items: center; 
    font-size: 18px; 
    font-weight: 900;
`;
export const PurchasedName = styled.a` 
    display: flex; 
    justify-content: space-between; 
    flex-direction: column; 
    align-items: center; 
    padding-top: 10px;
    padding-bottom: 5px;
    margin-bottom: 15px; 
`;
        
export const PurchasedPrice = styled.a` 
    display: flex; 
    justify-content: space-between; 
    flex-direction: column; 
    align-items: center; 
`;

export const PurchasedQuantity = styled.a` 
    display: flex; 
    justify-content: space-between; 
    flex-direction: column; 
    align-items: center; 
    padding-top: 10px;
    padding-bottom: 5px;
`;