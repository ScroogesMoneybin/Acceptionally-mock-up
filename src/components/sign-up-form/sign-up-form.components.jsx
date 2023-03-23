import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { createAuthorizedUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils.js"
import FormInput from "../form-input/form-input.components.jsx";

import {SignUpContainer} from './sign-up-form.styles.jsx';
import OurButton from "../button/button.components.jsx";

const defaultFormField = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const navigate = useNavigate();
    const [formField, setFormField] = useState(defaultFormField);
    const {userName, email, password,confirmPassword} = formField;
    const resetFormField = () => setFormField(defaultFormField); 

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormField({...formField, [name]: value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password!==confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        try {
            const {user} = await createAuthorizedUserWithEmailAndPassword(email, password);
            
            await createUserDocumentFromAuth(user, {userName});
            resetFormField();
            navigate('/');
            
        } catch(error) {
            if (error.code==='auth/email-already-in-use') {
                alert('Email already in use. Cannot register user.');
            } else {
                console.log("There was an error", error);
            }
        }

    };

    return (
        <SignUpContainer>
            <h2>Don't have an account yet?</h2>
            <span>Register with Email and Password</span>
            <h4>Password must contain at least one number, one uppercase letter, one lowercase letter, one special character, and be at least 8 or more characters long.</h4>
            <form onSubmit={handleSubmit}>
                
                <FormInput label='User Name' type="text" required onChange={handleChange} name = 'userName' value = {userName} />
                
                
                <FormInput label='Email' type="email" required onChange={handleChange} name = 'email' value = {email} />

                <FormInput label='Password' type="password" required onChange={handleChange} name = 'password' value = {password} 
                    pattern = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[~`!@#$%\^&*()\-_=+[\]{};:\x27.,\x22\\|/?><]).{8,}" 
                    title="Must contain at least one number, one uppercase letter, one lowercase letter, one special character, and at least 8 or more characters" />

                
                <FormInput label='Confirm Password' type="password" required onChange={handleChange} name = 'confirmPassword' value = {confirmPassword} 
                    pattern = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[~`!@#$%\^&*()\-_=+[\]{};:\x27.,\x22\\|/?><]).{8,}" 
                    title="Must contain at least one number, one uppercase letter, one lowercase letter, one special character, and at least 8 or more characters" />
                
                <OurButton type="submit">Register</OurButton>
                
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;