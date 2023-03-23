import styled from 'styled-components';



export const ProductCardContainer =styled.div` 
    width: 100%; 
    
    display: flex; 
    flex-direction: column; 
    height: 400px; 
    align-items: center; 
    position: relative; 
    margin-bottom: 30px; 
    padding-bottom: 30px;
    
    
    img { 
        width: 100%; 
        height: 90%; 
        object-fit: cover; 
        margin-bottom: 5px; 
    } 
    
    
   
    
    button
    {   width: 80%; 
        opacity: 0.7; 
        position: absolute; 
        top: 0px; 
        display: none; 
    } 
    
    &:hover { 
        img { 
            opacity: 0.8; 
        } 
        
        button { 
            opacity: 0.85; 
            display: flex; 
        } 

    button:last-child
    {   width: 80%; 
        opacity: 0.7; 
        position: absolute; 
        top: 255px; 
        display: none; 
    } 
    
    &:hover { 
        img { 
            opacity: 0.8; 
        } 
        
        button:last-child { 
            opacity: 0.85; 
            display: flex; 
        } 
    @media screen and (max-width: 800px) {
        width: 40vw;
        
        button {
            display: block;
            opacity: 0.9;
            min-width: unset;
            padding: 0 10px;

            &:hover {
                img {
                    opacity: unset;
                }

                button {
                    opacity: unset;
                }                
            }
        }
        
    }
    @media screen and (max-width: 900px) {
        margin-bottom: 40px;
    }
    

    @media screen and (max-width: 450px) {
        width: 80vw;
    }
`;
    
export const ProductFooter = styled.div` 
    
    width: 100%; 
    height: 10%; 
    display: flex; 
    justify-content: space-between; 
    flex-direction: column; 
    align-items: center; 
    font-size: 18px; 
    font-weight: 900;
    
`;
export const ProductName = styled.a` 
    display: flex; 
    justify-content: space-between; 
    flex-direction: column; 
    align-items: center; 
    padding-top: 10px;
    padding-bottom: 5px;
`;
        
export const ProductPrice = styled.a` 
    display: flex; 
    justify-content: space-between; 
    flex-direction: column; 
    align-items: center; 
`;

export const ProductQuantity = styled.a` 
    display: flex; 
    justify-content: space-between; 
    flex-direction: column; 
    align-items: center; 
    
    
`;
