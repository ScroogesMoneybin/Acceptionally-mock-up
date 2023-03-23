import styled from 'styled-components';

export const SignInContainer =styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    h2 {
        margin: 10px 0;

    }

    
`

export const SignInButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 900px) {
        
        margin-bottom: 35px;
        margin-right: 5px;
        
    }    
`