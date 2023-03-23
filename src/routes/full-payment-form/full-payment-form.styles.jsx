import styled from 'styled-components';

export const PaymentContainer = styled.div`
    @media screen and (max-width: 900px) {
        
        width: 100%;
        
    }
    @media screen and (max-width: 550px) {
        display: flex;
        justify-content: space-around;
        width: 100%;
        
        transform: scale(0.75);
        
    }

    @media screen and (max-width: 450px) {
                
        transform: scale(0.7);
        
    }

    @media screen and (max-width:360px) {
                
        transform: scale(0.6);
        
    }
    @media screen and (max-width:300px) {
                
        transform: scale(0.5);
        
    }
    @media screen and (max-width:250px) {
                
        transform: scale(0.4);
        
    }
`
