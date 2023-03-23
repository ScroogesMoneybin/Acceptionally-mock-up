import { Fragment } from 'react';
import { AboutHeaderContainer, AboutContainer, EbayLink } from './about-us.styles.jsx';

const AboutUs = () => {


    return (
    <Fragment>
        <AboutHeaderContainer> About Us</AboutHeaderContainer>
        <AboutContainer>
            
            
            Acceptionally.com is part of Nancy's Boutique, offering great deals on an ever-changing line-up of products.  We find a range of products and discontinued items that are available here.  
            Please visit our shop page to see a selection of a variety of household and clothing items as well as toys.

            We also make these available through eBay and Amazon.
            
            

        </AboutContainer>
        <EbayLink href="https://www.ebay.com/usr/yawefe5"  target="_blank" rel="noopener noreferrer">
            <h1>
                <u>
                    Link to eBay Store Front
                </u>
            </h1>
        </EbayLink>
    </Fragment>
    )
}

export default AboutUs;