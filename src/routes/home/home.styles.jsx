import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HomeHeader = styled.h1`
    width: 100%; 
    display: flex;
    justify-content: center;
    color: #7c04a4;

    @media screen and (max-width: 825px) {
        display: none;
    }
`



export const FooterContainer = styled.div`

    position: relative;
    display: flex;
    bottom: 0;
    width: 100%; 
    height: 7%;
    
    background-color: white;
    justify-content: space-around;
    color: #7c04a4;
    z-index: 2;

    @media screen and (max-width: 825px) {
        position: fixed;
        display: flex;
        bottom: 0;
        width: 100%; 
        height: 7%;
        
        background-color: white;
        justify-content: space-around;
        color: #7c04a4;
        z-index: 2;
    }
    

`;

export const ContactLink = styled(Link)`
    
    cursor: pointer; 

    @media screen and (max-width: 600px) {
        transform: scale(0.8);
        
    }
    @media screen and (max-width: 400px) {
        transform: scale(0.7);
        
    }
`

export const TermsLink = styled(Link)`
    position: relative;
    display: flex;
    cursor: pointer; 
    margin-bottom: end;

    @media screen and (max-width: 600px) {
        transform: scale(0.8);
        
    }
    @media screen and (max-width: 400px) {
        transform: scale(0.6);
        
    }
    
`