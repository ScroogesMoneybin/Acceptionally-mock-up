import styled from 'styled-components';

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 15px;
        grid-row-gap: 25px;
        width: 100%;
        
    }

    @media screen and (max-width: 450px) {
        grid-template-columns: 1fr;
        grid-row-gap: 25px;
    }
`

export const CategoryTitle = styled.h2`
    font-size: 38px;
    margin-bottom: 25px;
    text-align: center;

    @media screen and (max-width: 450px) {
        font-size: 30px;
    }
`
