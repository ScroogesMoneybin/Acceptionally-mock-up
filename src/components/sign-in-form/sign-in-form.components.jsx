import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {  signInAuthorizedUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils.js"
import FormInput from "../form-input/form-input.components.jsx";

import {SignInContainer, SignInButtonsContainer} from './sign-in-form.styles.jsx';
import OurButton, {OUR_BUTTON_TYPE_CLASSES} from "../button/button.components.jsx";

const defaultFormField = {
    email: '',
    password: '',
    
}

const SignInForm = () => {
    const navigate = useNavigate();
    const [formField, setFormField] = useState(defaultFormField);
    const {email, password} = formField;
    
    const resetFormField = () => setFormField(defaultFormField); 

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormField({...formField, [name]: value});
    }

    const GoogleSignIn = async () => {
        await signInWithGooglePopup();
        navigate('/');
                
    }; 

    const handleSubmit = async (event) => {
        event.preventDefault();
       
        try {
            const {user} = await signInAuthorizedUserWithEmailAndPassword(email, password);
            
            resetFormField();
            navigate('/');
            
        } catch(error) {
            if (error.code==='auth/wrong-password') {
                alert('Wrong password');
            } else if (error.code==='auth/user-not-found') {
                alert('User Not Found');
            }
            else {
                console.log("There was an error", error);
            }
        }
        
    };


    return (
        <SignInContainer>
            <h2>Already Have an Account?</h2>
            <span>Sign In with Your Email and Password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput label="Email" type="email" required onChange={handleChange} name = "email" value = {email} />

                <FormInput label='Password' type="password" required onChange={handleChange} name = 'password' value = {password} 
                    pattern = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[~`!@#$%\^&*()\-_=+[\]{};:\x27.,\x22\\|/?><]).{8,}" 
                    title="Must contain at least one number, one uppercase letter, one lowercase letter, one special character, and at least 8 or more characters" />
                <SignInButtonsContainer>
                    <OurButton type="submit">Sign In</OurButton>
                    <OurButton type="button" ourButtonType={OUR_BUTTON_TYPE_CLASSES.google} onClick={GoogleSignIn}>Google Sign In</OurButton>
                </SignInButtonsContainer>    
            </form>
        </SignInContainer>
    )
}

export default SignInForm;