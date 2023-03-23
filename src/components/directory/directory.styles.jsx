import styled from 'styled-components';

export const DirectoryGridContainer = styled.div` 
    width: 100%; 
    display: flex; 
    flex-wrap: wrap; 
    justify-content: space-between;

    @media screen and (max-width: 825px) {
        
        display: grid; 
        grid-template-columns: 1fr;
        grid-row-gap: 25px;
        height: 60px;
        padding: 10px 20px;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 650px) {
        
        
        padding-top: 50px;
        
    }

    
`