import styled from 'styled-components';

export const ProductImage = styled.img`
    width: 100%; 
    height: 100%; 
    
    object-fit: contain;
    
    
`

export const ProductImage2 = styled.div`
    width: 100%; 
    height: 100%; 
    
    background-size: cover; 
    
    background-position: center; 
    background-image: ${({imageUrl})=>`url(${imageUrl})`};
    
    
`

export const Body = styled.div`
    height: 90px; 
    padding: 0 25px; 
    display: flex; 
    
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    border: 1px solid black; 
    background-color: white; 
    opacity: 0.95; 
    position: absolute; 
    overflow: hidden; 

    //We only have one h2 and one p tag in this body, so we can subordinate it under Body. 
    //If we have more tags with different characteristics, we would break them out as separate elements.
    h2 { 
        font-weight: bold; 
        margin: 0 6px 0; 
        font-size: 22px; 
        color: #4a4a4a; 
        text-transform: uppercase;
    } 

    p { 
        font-weight: lighter; 
        font-size: 16px; 
    } 

    @media screen and (max-width: 1000px) {
        
        margin: 1px;
        padding: 2px;
        
    }
    @media screen and (max-width: 455px) {
                
        transform: scale(0.82);
        
    }
    @media screen and (max-width: 390px) {
                
        transform: scale(0.73);
        
    }
    @media screen and (max-width: 360px) {
                
        transform: scale(0.65);
        
    }
    @media screen and (max-width: 335px) {
                
        transform: scale(0.6);
        flex-wrap: wrap;
        
    }
`

export const DirectoryItemContainer = styled.div`
    min-width: 30%; 
    height: 240px; 
    flex: 1 1 auto; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    border: 1px solid black; 
    margin: 0 7.5px 15px; 
    
    
    
    &:hover { 
        cursor: pointer; 
        
        & ${ProductImage} { 
            transform: scale(1.1); 
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95); 
            background-color: #7c04a4;
            opacity: 0.8;
        } 

        & ${Body} { 
            max-width: 100%;
            opacity: 0.9; 
            overflow: hidden; 
        } 
    } 

    &.large { 
        height: 380px; 
    } 

    &:first-child { 
        margin-right: 7.5px; 
    } 

    &:last-child { 
        margin-left: 7.5px; 
    } 

    

    
    @media screen and (max-width: 800px) {
        height: 200px;
        margin: 0;

        &:first-child { 
            margin-right: 0px; 
        } 
    
        &:last-child { 
            margin-left: 0px; 
            padding-bottom: 50px;
        } 
    }
`
