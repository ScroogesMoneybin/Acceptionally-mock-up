import {CATEGORIES_ACTION_TYPES} from './category.types.js';


export const setCategories = (categoriesArray) => ({type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES, payload: categoriesArray});

export const fetchCategoriesStart = () => ({type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START});

export const fetchCategoriesSuccess = (categoriesArray) => ({type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, payload: categoriesArray});

export const fetchCategoriesFailed = (error) => ({type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, payload: error});

