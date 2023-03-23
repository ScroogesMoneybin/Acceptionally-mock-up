import { Fragment } from 'react';
import Directory from '../../components/directory/directory.components.jsx';
import ExteriorLinks from '../../components/exterior-links/exterior-links.components.jsx';
import {HomeHeader, FooterContainer, ContactLink, TermsLink } from './home.styles.jsx';



const Home = () => {


  return (
    <Fragment>
      <HomeHeader>Welcome to Nancy's Boutique at Acceptionally.com</HomeHeader>
      
      <Directory />
        
      <ExteriorLinks />
      <FooterContainer>
        <ContactLink to='/contactus'>
          <h2>
            <u>Contact Us</u>
          </h2>
          
        </ContactLink>
        <TermsLink to='/terms'>
          <h6>
            Terms of Use
          </h6>
          
        </TermsLink>
      </FooterContainer>
    </Fragment>
  );
}

export default Home;