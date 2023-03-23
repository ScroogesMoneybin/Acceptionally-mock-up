import { useParams } from 'react-router-dom';
import { useState, useEffect, Fragment  } from 'react';
import { useSelector } from 'react-redux';
import {selectorCategoriesMap, selectIsCategoriesLoading} from '../../store/categories/category.selector.js';
import ProductCard from '../../components/product-card/product-card.components';
import Spinner from '../../components/spinner/spinner.components.jsx';
import {CategoryContainer, CategoryTitle} from './category.styles.jsx';


const Category = () => {
    const {category} = useParams();
    const categoriesMap = useSelector(selectorCategoriesMap);
    const isLoading = useSelector(selectIsCategoriesLoading);
    const [products, setProducts] = useState(categoriesMap[category]);
    
    
    useEffect(()=> {
        setProducts(categoriesMap[category]);
    },[category, categoriesMap]);  /* useEffect updates if category or categoriesMap changes*/
    
    return (
        <Fragment>
            <CategoryTitle>
                {category.toUpperCase()}
            </CategoryTitle>
            {/* While loading categories, run spinner intil loaded. */}
            {isLoading ? (<Spinner />) : ( 
            <CategoryContainer>
                
                {products && products.map((product) => (<ProductCard key={product.id} product={product} /> ))}
                
            </CategoryContainer>
            )}
        </Fragment>
    );

}

export default Category;