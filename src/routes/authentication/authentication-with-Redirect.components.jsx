// This file isn't used. It includes Google sign in with ReDirect.
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';  /* getRedirectResult brings allows us to import 'auth' from firebase.utils.js */
import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils.js'

const SignIn = () => {
    useEffect(() => {
        async function check() {
            const response = await getRedirectResult(auth);

            if (response) {
                const userDocReference = await createUserDocumentFromAuth(response.user);
        }
    } 
    check();},
    []); /* Empty array [] tells useEffect to run only once when call-back component mounts for first time */
    /* After using Redirect and choosing user, upon mounting, this useEffect runs and gets the result of the Redirect. */
    
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocReference = await createUserDocumentFromAuth(user);
    }; 

    return (
        <div>
            <h1>Sign-In</h1>
            <button onClick={logGoogleUser}>Sign In With Google Popup</button>
            <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button>
        </div>
    )
}

export default SignIn;