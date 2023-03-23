import {loadStripe} from '@stripe/stripe-js';
//loadStripe instantiates our Stripe instance

export const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY) 


