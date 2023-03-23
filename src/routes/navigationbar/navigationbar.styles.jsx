import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const NavigationContainer = styled.div`

    position: sticky;
    top: 0;
    min-width: 100%; 
    display: flex; 
    justify-content: space-between; 
    margin-bottom: 10px; 
    background-color: white;
    z-index: 1;

    @media screen and (max-width: 800px) {
        width: 100%;
        height: 60px;
        padding: 5px 10px;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 650px) {
        height: 100px;
        padding: 0px;
                
    }
    
   
`;




export const LogoContainer = styled(Link)`

    height: 100%; 
    width: 60px; 
    padding: 10px; 

    @media screen and (max-width: 800px) {
        
        width: 50px;
        padding: 0px;
        
        
    }

    @media screen and (max-width: 650px) {
        
        width: 25%;
                
    }
`

export const CenterContainer = styled.div`
    height: 20%; 
    width: 20%; 
    padding: 10px; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    @media screen and (max-width: 1000px) {
        display: none;
        
        
                
    }

    

`

export const NavBarLinksContainer = styled.div  `
    width: 50%; 
    height: 100%; 
    display: flex; 
    align-items: center; 
    justify-content: flex-end; 
    
    @media screen and (max-width: 800px) {
        width: 70%;
    }

    @media screen and (max-width: 650px) {
        width: 100%;
        margin-top: 10px;
        justify-content: space-between; 
        
    }

    @media screen and (max-width: 390px) {
       
        
        padding: 20px 0px 0px 0px;
        
                
    }
    
    
`
export const NavBarLink = styled(Link)`

    padding: 20px; 
    cursor: pointer; 
    align-items: center; 
    color: #7c04a4;

    @media screen and (max-width: 650px) {
       
        padding: 0px;
                
    }
    @media screen and (max-width: 475px) {
       
        transform: scale(0.8);
        margin: 1px;
                
    }

    @media screen and (max-width: 390px) {
       
        transform: scale(0.8);
        margin: 10px 1px 1 px 1px;
        
                
    }
       
`


