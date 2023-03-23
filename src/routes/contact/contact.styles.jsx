import styled from 'styled-components';
import OurButton from '../../components/button/button.components.jsx';

export const ContactContainer = styled.div`
    font-size: 18px;
    padding-left: 50px;
    padding-top: 10px;
    margin: 10px;

    @media screen and (max-width: 720px) {
        transform: scale(0.8);
        padding-left: 0px;
        padding-top: 0px;
        margin: 0px;
        
    }
`

export const FormContainer = styled.form`
    display: grid;
    grid-template-rows: (5, 1fr); 
    padding-left: 50px;
    height: 200px;
    width: 100%;

    @media screen and (max-width: 720px) {
        transform: scale(0.8);
        padding-left: 0px;
        padding-top: 0px;
        margin: 0px;
        
    }
    
`




export const FirstNameInput = styled.input`
    
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    background-color: papayawhip;
    border: black;
    border-radius: 3px;
    width: 30%;

    @media screen and (max-width: 720px) {
        
        padding: 10px;
        
        margin: 0px;
        width: 70%;
    }
`

export const LastNameInput = styled.input`
    
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    background-color: papayawhip;
    border: none;
    border-radius: 3px;
    width: 30%;

    @media screen and (max-width: 720px) {
        
        padding: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 0px;
        
        width: 70%;
        
    }
`

export const MessageInput = styled.textarea`
    
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    background-color: papayawhip;
    border: none;
    border-radius: 3px;
    width: 80%;
    height: 250px;
    
    @media screen and (max-width: 720px) {
        
        padding-left: 0px;
        padding-top: 10px;
        margin: 0px;
        width: 100%;
        
    }
    
`

export const EmailInput = styled.input`
     
    max-width: 50%;    
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    background: papayawhip;
    border: none;
    border-radius: 3px;
    
    
    @media screen and (max-width: 720px) {
        min-width: 50%;
        padding-left: 0px;
        padding-top: 10px;
        margin-top: 10px;
        margin-left: 0px;
        
        
    }
    

`

export const ContactButton = styled(OurButton)`
    display: flex;
    min-width: 15%;
    margin-right: auto;
    margin-top: 30px;
    margin-left: 10px;
    float: left;
`