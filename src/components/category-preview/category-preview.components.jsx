import ProductCard from '../product-card/product-card.components.jsx'
import {CategoryPreviewContainer, CatPreview, CatTitle} from './category-preview.styles.jsx';


const CategoryPreview = ({title, products}) => {
    
    return (
        <CategoryPreviewContainer>
            <h2>
                <CatTitle to={title}>{title.toUpperCase()}</CatTitle>
            </h2>
            <CatPreview>
                {products.filter((_,index)=>index < 4).map((product)=>(
                    <ProductCard key={product.id} product={product} />
                ))}
            </CatPreview>
        </CategoryPreviewContainer>
    );
}

export default CategoryPreview;