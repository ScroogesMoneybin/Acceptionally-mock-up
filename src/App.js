import { Routes, Route } from 'react-router-dom';
import { useEffect} from "react";
import { useDispatch } from 'react-redux';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./utils/firebase/firebase.utils";
import Home from './routes/home/home.components.jsx';
import NavigationBar from './routes/navigationbar/navigationbar.components.jsx';
import Authentication from './routes/authentication/authentication.components.jsx';
import Shop from './routes/shop/shop.components.jsx';
import Checkout from './routes/checkout/checkout.components.jsx';
import {setCurrentUser} from './store/user/user.action.js';
import ThankYou from './routes/thank-you/thank-you.components.jsx';
import AboutUs from  './routes/about-us/about-us.components.jsx';
import Null from  './routes/null/null.components.jsx';
import SingleProductPage from './routes/individual-product-page/individual-product-page.components.jsx';
import FullPaymentForm from './routes/full-payment-form/full-payment-form.components.jsx';
import Contact from './routes/contact/contact.components.jsx';
import ContactRecognition from './routes/contact-recognition/contact-recognition.components.jsx';
import TermsOfUse from './routes/terms-of-use/terms-of-use.components.jsx';


const App = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    const unsubscribe = onAuthStateChangedListener((user)=>{
            if (user) {
                createUserDocumentFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        });
        return unsubscribe;
    },[dispatch]); /*[dispatch] is not actually necessary inside the [], but it prevents warnings.*/

  
  return (
    
    <Routes>
      <Route path = '/' element={<NavigationBar />}>  
        <Route index={true} element={<Home />} />     {/* index makes this component the Home component for landing page '/' */}
        <Route path= 'shop/*' element={<Shop />} />
        <Route path= 'authentication' element={<Authentication />} />
        <Route path= 'checkout' element={<Checkout />} />
        <Route path = 'thankyou' element={<ThankYou />} />
        <Route path = 'aboutus' element={<AboutUs />} />
        <Route path = 'payment' element={<FullPaymentForm />} />
        <Route path = 'contactus' element={<Contact />} />
        <Route path = 'contact-acknowledgement' element={<ContactRecognition />} />
        <Route path = 'terms' element={<TermsOfUse />} />
        <Route path =':id' element={<SingleProductPage />}/>        
        <Route path = '*' element={<Null />} />
        

      </Route>
    </Routes>
    
  );
}

export default App;
