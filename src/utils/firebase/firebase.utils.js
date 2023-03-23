import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};



// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
//const firebaseAnalytics = getAnalytics(firebaseApp);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

//pass into order saga
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);  /* Find item matching collectionKey value in database db */
    /*use batch to batch write transactions to database so that if one element of transaction fails then whole transaction is reversed.*/
    const batch = writeBatch(db);  /* batch instance */

    //create set events
    objectsToAdd.forEach((object)=>{
        const docRef=doc(collectionRef, object.title.toLowerCase());  /*object.title.toLowerCase() is the key*/
        batch.set(docRef,object);
    });
    await batch.commit();
    
}

//fetch database documents in categories saga
export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');  /*categories key*/
    const q = query(collectionRef);
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
    
}


//pass into order saga
export const updateCategoriesAndDocumentsQuantity = async (orders, allItems) => {
   
    try {
        allItems.map(async (category) => {
        
        let categ=category.items;
        
        let updatedQuantityCategoryArray = [];
        let updatedCatOrdersArray = orders.map((order)=>{
            
            
            let cat = order.title;
            
            const itemQuantity = order.quantity;
            
            if (category.title===cat){
                
                categ.map(item=>{
                    if (item.id===order.id){
                        const updatedQuantityItem= {...item, quantity: item.quantity - itemQuantity};
                        updatedQuantityCategoryArray.push(updatedQuantityItem);
                        
                        
                    }
                })
                
            }

        })
        

        //Following line is great. takes elements in 2nd array updatedQuantityCategoryArray 
        //and uses them to replace the elements in the 1st array categ with the same id
        let combinedArray=categ.map(obj => updatedQuantityCategoryArray.find(o => o.id === obj.id) || obj);

        
        let formattedObject ={items: combinedArray, title: category.title};
        
   
        if (updatedQuantityCategoryArray.length){
            
            const itemsDocReference = doc(db, 'categories', `${category.title}`);
            await setDoc(itemsDocReference, formattedObject, {merge: true}).then(docRef => {
            console.log("Value of an Existing Document Field has been updated");})
        }
}
)
    }
    catch (err){
        console.log("saga error", err)
    }
}

export const setDelay = (delay) => {return new Promise(res=>setTimeout(res,delay))}




export const createUserDocumentFromAuth = async (userAuth, extraInfo={}) => {
    if (!userAuth) return;
    const userDocReference = doc(db, 'users', userAuth.uid);
    

    const userSnapshot = await getDoc(userDocReference);


    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocReference, {
                displayName,
                email,
                createdAt,
                ...extraInfo
            });
        } 
        catch(error) {
            console.log('there is an error:',error.message)
        } 
    }
    return userDocReference;
} 

export const createAuthorizedUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) {
        return;
    };
    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthorizedUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) {
        return;
    };
    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async ()=> await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);









export const createOrderDocument = async (order, totalCost) => {
    const createdAt = String(new Date());
    const orderDocReference = doc(db, 'orders', `${createdAt}`);
      
        
    try {
        await setDoc(orderDocReference, {
            
            createdAt,
            order,
            totalCost
            
        });
    } 
    catch(error) {
        console.log('there is an error:',error.message)
    } 
    return createdAt;
} 


//Pass orderId to it in the order saga
export const getOrderDocument = async (orderId) => {
    if (!orderId) return;
    const orderDocReference = doc(db, 'orders', `${orderId}`);


    const order = await getDoc(orderDocReference);
    
    const orderInfo = order.data()
    
    return orderInfo;
   
}


    
export const getOrdersCollectionDocuments = async () => {
    const ordersRef = collection(db, 'orders');  /*categories key*/
    const q = query(ordersRef);
    
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
    // return querySnapshot.docs.data()

}