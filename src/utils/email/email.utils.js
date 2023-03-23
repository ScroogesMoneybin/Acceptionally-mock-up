import {send} from 'emailjs-com';


export const emailOrderReply = async (info) => await send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_ORDER_REPLY_TEMPLATE_KEY, info, process.env.REACT_APP_EMAILJS_PUBLIC_KEY).then((res)=>{console.log("SUCCESS",res.status, res.text)}).catch((err)=>{console.log("Error sending message", err)})
    

