import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
    display: flex;
    width: 900px;
    justify-content: space-between;
    margin: 30px auto;

    @media screen and (max-width: 900px) {
        width: 100%;
        display: grid; 
        grid-template-columns: 1fr; 
        margin: 20px;
        padding: 10px;
    }


`