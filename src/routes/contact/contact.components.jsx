import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import {send} from 'emailjs-com';
import {ContactContainer, FormContainer, FirstNameInput, LastNameInput, MessageInput, EmailInput, ContactButton} from './contact.styles.jsx';


const Contact = () => {
    const navigate = useNavigate();
    const goToContactRecognitionHandler = () => navigate('/contact-acknowledgement');

    const INITIAL_FORM_STATE = {
        first_name:'',
        last_name:'',
        message:'',
        reply_to:''
    }

    const [toSend, setToSend] = useState(
        INITIAL_FORM_STATE
    );

    const onSubmit = (e) => {
        e.preventDefault();
        if (!toSend.first_name || !toSend.last_name || !toSend.message || !toSend.reply_to) {
            alert("Please fill in the forms before submitting email.");
            return;
        }
        
        send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_CONTACT_KEY, toSend, process.env.REACT_APP_EMAILJS_PUBLIC_KEY).then((res)=>{console.log("SUCCESS",res.status, res.text)}).catch((err)=>{console.log("Error sending message", err)})
        setToSend(INITIAL_FORM_STATE);
        goToContactRecognitionHandler();
    }

    const handleChange = (e) => setToSend({...toSend,[e.target.name]:e.target.value});


return(
        <Fragment>
            <ContactContainer><h2>Contact Form:</h2></ContactContainer>
            <FormContainer onSubmit={onSubmit}>
                <FirstNameInput  type="text" name='first_name' placeholder="Your First Name" value={toSend.first_name} onChange={handleChange} />
                <LastNameInput  type="text" name='last_name' placeholder="Your Last Name" value={toSend.last_name} onChange={handleChange} />
                <MessageInput  type="text" name='message' placeholder="Write Message Here" value={toSend.message} onChange={handleChange} />
                <EmailInput  type="email" name='reply_to' placeholder="Your Email Address" value={toSend.reply_to} onChange={handleChange} />
                <ContactButton>Submit Email</ContactButton>
            </FormContainer>
            
        </Fragment>
  
)
}

export default Contact;