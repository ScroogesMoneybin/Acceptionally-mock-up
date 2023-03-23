//Reminder: To use netlify serverless functions, netlify looks for a folder "netlify" in root folder, 
//and within "netlify" folder, it looks for "functions" folder to use during build step

//We're working on the backend serverlass functions here

require("dotenv").config(); //attached .env variables onto process environment
const stripe = require("stripe")(process.env.STRIPE_UNPUBLISHED_KEY);


exports.handler = async (event) => {
    
    try {
        const {amount} = JSON.parse(event.body);
        
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            // payment_method_types: ['card']     /*Only used for CardElement, not PaymentElement*/
            automatic_payment_methods: {  //
                enabled: true,            //
              },
        });
        
        return {
            statusCode: 200,
            body: JSON.stringify({paymentIntent})
            
            //clientSecret: paymentIntent.client_secret //
        }
        
    }
    catch (error) {
        console.log({error});
        return {
            status: 400,
            body: JSON.stringify({error})
        }
    }
}