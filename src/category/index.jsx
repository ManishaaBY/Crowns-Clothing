import { useParams } from 'react-router-dom'; 
import { CardList } from '../components/cardlist';

export const CategoryPage = () => {
    const { category } = useParams(); 
    let categoryId;
    switch (category) {
      case 'hats':
        categoryId = 0;
        break;
      case 'sneakers':
        categoryId = 1;
        break;
      case 'jackets':
        categoryId = 2;
        break;
      case 'mens':
        categoryId = 4;
        break;
      case 'womens':
        categoryId = 3;
        break;
      default:
        categoryId = 0;
    }
  
    return <CardList categoryId={categoryId} />;
  };
  