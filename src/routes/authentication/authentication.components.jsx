import SignUpForm from '../../components/sign-up-form/sign-up-form.components.jsx';
import SignInForm from '../../components/sign-in-form/sign-in-form.components.jsx';
import {AuthenticationContainer} from './authentication.styles.jsx';

const Authentication = () => {

    return (
        <AuthenticationContainer>
            <SignInForm />
            <SignUpForm />
         </AuthenticationContainer>
    )
}

export default Authentication;