import {BaseButton, GoogleSignInButton, InvertedButton, ButtonSpinner} from "./button.styles.jsx";
// Three types of buttons: default, inverted, google sign-in

export const OUR_BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: "google-sign-in",
    inverted: "inverted-sign-in"
}

const getButton = (ourButtonType=OUR_BUTTON_TYPE_CLASSES.base) => (
    {
        [OUR_BUTTON_TYPE_CLASSES.base]: BaseButton,
        [OUR_BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [OUR_BUTTON_TYPE_CLASSES.inverted]: InvertedButton
    }[ourButtonType]
);

const OurButton = ({children, ourButtonType, isLoading, ...otherProps}) => {
    const CustomButton = getButton(ourButtonType);
    return (
        <CustomButton disabled={isLoading} {...otherProps}>{isLoading ? <ButtonSpinner /> : children}</CustomButton>
    )
}

export default OurButton;