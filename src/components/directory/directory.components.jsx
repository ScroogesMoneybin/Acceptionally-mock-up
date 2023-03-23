import DirectoryItem from '../directory-item/directory-item.components.jsx';
import { DirectoryGridContainer } from './directory.styles.jsx';
import photo1 from './assets/mens-silhoutte.PNG';
import photo2 from './assets/womens-silhoutte.PNG';
import photo3 from './assets/childrens-silhoutte.PNG';
import photo4 from './assets/toys-silhoutte.PNG';
import photo5 from './assets/pets-silhoutte.PNG';
import photo6 from './assets/toiletries-silhoutte.PNG';
import photo7 from './assets/household-and-misc-items-silhoutte.PNG';


const categories= [
  {
    id: 1,
    title: "Men's Clothing",
    subtitle: "Shop Now",
    imageUrl: photo1,
    route: 'shop/mens'
    //routes here are placeholders to go to current categories. Update with new categories as they change
  },
  {
    id: 2,
    title: "Women's Clothing",
    subtitle: "Shop Now",
    imageUrl: photo2,
    route: 'shop/womens'
  },
  {
    id: 3,
    title: "Children's Clothing",
    subtitle: "Shop Now",
    imageUrl: photo3,
    route: 'shop/childrens'
  },
  {
    id: 4,
    title: "Toys",
    subtitle: "Shop Now",
    imageUrl: photo4,
    route: 'shop/toys'
  },
  {
    id: 5,
    title: "Pet Products",
    subtitle: "Shop Now",
    imageUrl: photo5,
    route: 'shop/pets'
  },
  {
    id: 6,
    title: "Toiletries & Perfumes",
    subtitle: "Shop Now",
    imageUrl: photo6,
    route: 'shop/toiletries'
  },
  {
    id: 7,
    title: "Household And Misc Items",
    subtitle: "Shop Now",
    imageUrl: photo7,
    route: 'shop/household'
  },
];


const Directory = () => {

  return (
    <DirectoryGridContainer>
      {categories.map((category)=> (
          <DirectoryItem key= {category.id} category={category} />
      ))}      
    </DirectoryGridContainer>
  )
}

export default Directory;