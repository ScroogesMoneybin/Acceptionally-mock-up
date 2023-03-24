import { takeLatest, all, call, put } from 'redux-saga/effects';
import {addCollectionAndDocuments, getCategoriesAndDocuments} from '../../utils/firebase/firebase.utils.js';
import {fetchCategoriesSuccess, fetchCategoriesFailed} from './category.action.js';
import { CATEGORIES_ACTION_TYPES } from './category.types.js';
import PRODUCT_DATA from '../../product-data.js';


export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)  /* takeLatest takes the most recent FETCH_CATEGORIES_START and runs it */
}  /*When we call the sagas, this will listen for FETCH_CATEGORIES_START to start running*/

export function* fetchCategoriesAsync() {
    
    try {
        /**/
        // yield addCollectionAndDocuments('categories', PRODUCT_DATA);  /*This adds the products to the database. Comment it out when not loading new items.*/
        /**/
        const categoriesArray = yield call(getCategoriesAndDocuments,'categories');  /* Call() turns a function into an effect. First argument is the function, followed by parameters of that function */
        yield put(fetchCategoriesSuccess(categoriesArray)); /* Instead of dispatch, use put inside of a generator */
    }
    catch (error){
        put(fetchCategoriesFailed(error))
    }
}



// generator function Saga
export function* categoriesSaga() {
    yield all([call(onFetchCategories)])  /* the rest of the code won't run until all the generators in all() run */
}
