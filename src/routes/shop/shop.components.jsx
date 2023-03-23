import {Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CategoriesPreview from '../categories-preview/categories-preview.components.jsx'
import Category from '../category/category.components.jsx'

import {fetchCategoriesStart} from '../../store/categories/category.action.js';




const Shop = () => {
    const dispatch = useDispatch();
    useEffect(()=>{  
        dispatch(fetchCategoriesStart());
    }, []); 

    return (
        <Routes>
            <Route index element = {<CategoriesPreview />} />
            <Route path=':category' element = {<Category />} />
            
        </Routes>
    );
   
};

export default Shop;