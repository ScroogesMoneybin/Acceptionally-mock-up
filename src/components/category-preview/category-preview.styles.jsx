import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div` 
    display: flex; 
    flex-direction: column; 
    margin-bottom: 30px; 

    @media screen and (max-width: 900px) {
        align-items: center;
    }
`
export const CatTitle = styled(Link)` 
    font-size: 28px; 
    margin-bottom: 25px; 
    cursor: pointer; 
`

export const CatPreview = styled.div` 
    display: grid; 
    grid-template-columns: repeat(4, 1fr); 
    column-gap: 20px; 
    padding-bottom: 30px;

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 15px;
        grid-row-gap: 25px;
        
    }

    @media screen and (max-width: 400px) {
        grid-template-columns: 1fr;
        grid-row-gap: 25px;
    }
`