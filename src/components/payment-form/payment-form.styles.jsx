import styled from 'styled-components';
import OurButton from '../button/button.components';

export const PaymentFormContainer = styled.div`
    height 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
`;

export const FormContainer = styled.form`
    height: 100px;
    min-width: 500px;
    margin-bottom: 50px;
`

export const PaymentButton = styled(OurButton)`
    margin-left: auto;
    margin-top: 30px;
`