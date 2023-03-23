import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import {selectorCategoriesMap, selectIsCategoriesLoading} from '../../store/categories/category.selector.js';
import CategoryPreview from '../../components/category-preview/category-preview.components.jsx';
import Spinner from '../../components/spinner/spinner.components.jsx';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectorCategoriesMap);
    const isLoading = useSelector(selectIsCategoriesLoading);
    
    return (
        <Fragment>
            { isLoading ? (<Spinner />) : 
                (Object.keys(categoriesMap).map((title)=>{
                    const products= categoriesMap[title];
                    return (
                        <CategoryPreview key={title} title={title} products={products} />
                    );
                }
                
            ))
            }   
        </Fragment>
    )
}

export default CategoriesPreview;