import {ProductImage, Body, DirectoryItemContainer} from './directory-item.styles.jsx'
import {useNavigate} from 'react-router-dom';

const DirectoryItem = ({category}) => {
    const {title, subtitle, imageUrl, route} = category;
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate(route);

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <ProductImage src ={imageUrl} alt={`${title}`}/>
            <Body>
            <h2>{title}</h2>
            <p>{subtitle}</p>
            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;