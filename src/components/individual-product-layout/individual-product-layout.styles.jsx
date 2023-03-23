import styled from 'styled-components';

export const CardContainer = styled.div`
    margin: 10px;
    
`

export const ProductContainer = styled.div`
    
    display: flex; 
    flex-direction: column; 
    height: 500px; 
    align-items: center; 
    position: relative; 
    
    
    img { 
        
        height: 100%; 
        object-fit: contain; 
        margin-top: 10px; 
    } 
`
export const ButtonContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    
    align-items: center; 
`

export const InfoContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center; 
  
    font-size: 20px;
`